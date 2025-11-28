# Nginx 速查

## 常用命令

```bash
# 测试配置
nginx -t

# 关闭
nginx -s stop
```

## 配置

### 日志

```ini
# 定义格式 my_logfmt
log_format my_logfmt '$remote_addr - $remote_user [$time_local]'
                '"$request" $status $body_bytes_sent'
                '"$http_referer" "$http_user_agent"';
http {
    # 得到日期变量 $logdate  2022-01-01 的格式
    map $time_iso8601 $logdate {
        '~^(?<ymd>\d{4}-\d{2}-\d{2})' $ymd;
        default                       'date-not-found';
    }

    server {
        # 1. 可以在日志路径上使用 $logdate
        access_log logs/access-$logdate.log;

        # 2. 自定义日志格式化
        # my_logfmt 是前文 log_format 定义的格式
        # buffer=64k   日志文件缓存在内存中的大小
        # flush=1m     内存中日志存留一分钟
        access_log /application/nginx/logs/access.log my_logfmt buffer=64k flush=1m;
        
        # 日志缓存，默认是 off
        # max=1000     设置缓存中的最大文件描述符数量，如果缓存被占满，采用LRU算法将描述符关闭。
        # inactive=20s  日志文件在缓存中没有被使用就会被取消
        # valid=1m     默认 1m 或 60s  两个单位都可以使用
        # min_uses=1   在存活时间内日志被写入几次才会记录到缓存
        open_log_file_cache max=1000 inactive=20s valid=1m min_uses=1s;
    }
}
```

### server

```ini
# server 下的 if 要比 location 更高优先级。
# 此种情况下，只要不是静态文件，都会被 if 里的 rewrite 命中，其他 location 没有处理的机会。
if (!-f $request_filename) {
    rewrite  ^(.*)$  /index.php?s=/$1  last;
}

# 带 location 的 if 可以让其他高优先级的 location 处理没有静态文件的情况。
location / {
    if (!-f $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
    }
}
```

### location

```ini
# = 完全匹配，优先级【最高】
location = /respond_string {
    # 直接响应字符串
    return 200 'hello';
}

# ^~ 前缀匹配，优先级【高】，但是不能写正则式，只能是前缀字符串。
location ^~ /api {}

# ~ 正则匹配（区分大小写），优先级【中】
location ~ ^/api/(.*)$ {
    if (!-f $request_filename) {
        # rewrite 是把请求的 URL 改成下面的去匹配。
        rewrite  ^(.*)$  /index.php?s=/$1  last;
        break;
    }
}

# ~* 正则匹配（不区分大小写），优先级【中】
location ~* /ignore-case/(.*)$ {
    # 定义变量
    set $a $uri;
    set $b 'bbbb';
    set $tail $1; # 正则子匹配取值

    try_files $uri @phpcgi;
}

# 普通前缀匹配，优先级【低】
location /some {}

# 命名 location，被 error_page、try_files、rewrite ... last 等特殊使用。
location @phpcgi {}
```

### upstream

```ini
# 使用时是 proxy_pass http://proxyserver 
# 基本用法 默认是轮询
upstream proxyserver {
    server 127.0.0.1:8001;
    server 127.0.0.1:8002;
}

# weight: 权重，权重越高分配请求数越多。
# max_fails: 请求允许失败次数
# fail_time: 失败后暂停时间
upstream proxyserver {
    server 127.0.0.1:8080 weight=3 max_fails=2 fail_timeout=30s;
    server 127.0.0.1:8081 backup; # backup 主服务器全挂才启用
    server 127.0.0.1:8082 down; # 标记不可用
}

# 几种互斥的方式
upstream proxyserver {
    ip_hash; # 1. 使用 IP 哈希
    least_conn; # 2. 分配给最小连接数 
    server 127.0.0.1:8080;
    server 127.0.0.1:8081;
}

```

### 简单 HTTP 反向代理

```ini
server {
    # 监听端口
    listen 80;
    # 绑定的域名，填写您的域名
    server_name proxy.domain.com;

    location / {
        # 将客户端的 Host 和 IP 信息一并转发到对应节点
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # 转发Cookie，设置 SameSite
        proxy_cookie_path / "/; secure; HttpOnly; SameSite=strict";
        proxy_pass http://127.0.0.1:8080;
    }
}
```

### 支持 WebSocket 的 HTTP 反向代理

```ini
server {
    listen 80;
    server_name websocket.demain.com;

    location / {
        # WebSocket Header
        proxy_http_version 1.1;
        proxy_set_header Upgrade websocket;
        proxy_set_header Connection "Upgrade";

        # 将客户端的 Host 和 IP 信息一并转发到对应节点  
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;

        # 客户端与服务端无交互 60s 后自动断开连接，根据实际业务场景设置
        proxy_read_timeout 60s ;

        # 执行代理访问真实服务器
        proxy_pass http://proxy_websocket;
    }
}
```

### fastcgi 配置

这种配置一般的集成环境会配置一些诸如 php.70.conf 这种文件。
关键在于 fastcgi\_\* 这些配置，尤其 fastcgi_pass 和 include fastcgi.conf 提供默认的配置。

```ini
server {
    listen *:80;
    server_name localhost;
    root /path/to/public;
    error_page 404 = @phpfcgi;

    location = /index.php {
        return 404;
    }

    location / {
        try_files $uri @phpfcgi;
    }

    location @phpfcgi {
        fastcgi_param PATH_INFO $uri;
        fastcgi_param SCRIPT_FILENAME $document_root/index.php;
        include fastcgi.conf;
        fastcgi_pass 127.0.0.1:9000;
    }
}
```

### 客户端证书

一般情况下使用的都是服务端证书，也就是 Let'encrypt 颁发的免费证书，或者去 CA 机构买的付费证书，这种证书是服务器为了证明自己身份使用的。
而客户端证书顾名思义，就是让客户端证明自己身份使用的，这种一般是自己的服务之间连接用来替代账号的。
服务器A 要调用 服务器B，那么服务器B可以启用客户端证书校验，给服务器A 颁发证书，这样只有有证书的客户端（服务器A）可以访问 服务器 B。
这样的好处是鉴权与业务无关，服务端代码可以不用鉴权，缺点是没有权限范围控制，只有能访问和不能访问两种情况，不能只开放部分功能。
如果要区分权限，那么服务端代码要再验证一遍证书，不能只使用 nginx 实现，要服务器匹配证书内容做鉴权功能。

```ini
# 文档 https://nginx.org/en/docs/http/ngx_http_ssl_module.html
# OID 参考 https://oidref.com/

server {
    # 受信任证书配置
    # ssl_trusted_certificate 
    ssl_client_certificate /path/to/ca.crt; # 客户端 CA 证书路径，一般自签。
    ssl_verify_client optional; # 证书可选，通过不用权限的公开页面。

    location /api {
        # 验证结果
        if ($ssl_client_verify != SUCCESS) {
            return 401;
        }

        # 通过头部转发客户端证书，这种多是要服务端鉴权区分权限才传递。
        proxy_set_header X-SSL-Client-Cert $ssl_client_cert;
        proxy_pass http://127.0.0.1:10086;
    }
}
```

### 内置配置

#### conf/mime.conf

这个文件里面是根据后缀给静态文件提供 Content-Type 信息。
有些文件变成下载的问题就是这个文件没有找到对应类型被指定成默认的二进制类型了。

```ini
types {
    text/html                                        html htm shtml;
    text/css                                         css;
    text/xml                                         xml;
    image/gif                                        gif;
    image/jpeg                                       jpeg jpg;
    application/javascript                           js;
    application/atom+xml                             atom;
    application/rss+xml                              rss;

    text/mathml                                      mml;
    text/plain                                       txt;
    text/vnd.sun.j2me.app-descriptor                 jad;
    text/vnd.wap.wml                                 wml;
    text/x-component                                 htc;

    image/png                                        png;
    image/svg+xml                                    svg svgz;
    image/tiff                                       tif tiff;
    image/vnd.wap.wbmp                               wbmp;
    image/webp                                       webp;
    image/x-icon                                     ico;
    image/x-jng                                      jng;
    image/x-ms-bmp                                   bmp;

    application/font-woff                            woff;
    application/java-archive                         jar war ear;
    application/json                                 json;
    application/mac-binhex40                         hqx;
    application/msword                               doc;
    application/pdf                                  pdf;
    application/postscript                           ps eps ai;
    application/rtf                                  rtf;
    application/vnd.apple.mpegurl                    m3u8;
    application/vnd.google-earth.kml+xml             kml;
    application/vnd.google-earth.kmz                 kmz;
    application/vnd.ms-excel                         xls;
    application/vnd.ms-fontobject                    eot;
    application/vnd.ms-powerpoint                    ppt;
    application/vnd.oasis.opendocument.graphics      odg;
    application/vnd.oasis.opendocument.presentation  odp;
    application/vnd.oasis.opendocument.spreadsheet   ods;
    application/vnd.oasis.opendocument.text          odt;
    application/vnd.openxmlformats-officedocument.presentationml.presentation
                                                     pptx;
    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
                                                     xlsx;
    application/vnd.openxmlformats-officedocument.wordprocessingml.document
                                                     docx;
    application/vnd.wap.wmlc                         wmlc;
    application/x-7z-compressed                      7z;
    application/x-cocoa                              cco;
    application/x-java-archive-diff                  jardiff;
    application/x-java-jnlp-file                     jnlp;
    application/x-makeself                           run;
    application/x-perl                               pl pm;
    application/x-pilot                              prc pdb;
    application/x-rar-compressed                     rar;
    application/x-redhat-package-manager             rpm;
    application/x-sea                                sea;
    application/x-shockwave-flash                    swf;
    application/x-stuffit                            sit;
    application/x-tcl                                tcl tk;
    application/x-x509-ca-cert                       der pem crt;
    application/x-xpinstall                          xpi;
    application/xhtml+xml                            xhtml;
    application/xspf+xml                             xspf;
    application/zip                                  zip;

    application/octet-stream                         bin exe dll;
    application/octet-stream                         deb;
    application/octet-stream                         dmg;
    application/octet-stream                         iso img;
    application/octet-stream                         msi msp msm;

    audio/midi                                       mid midi kar;
    audio/mpeg                                       mp3;
    audio/ogg                                        ogg;
    audio/x-m4a                                      m4a;
    audio/x-realaudio                                ra;

    video/3gpp                                       3gpp 3gp;
    video/mp2t                                       ts;
    video/mp4                                        mp4;
    video/mpeg                                       mpeg mpg;
    video/quicktime                                  mov;
    video/webm                                       webm;
    video/x-flv                                      flv;
    video/x-m4v                                      m4v;
    video/x-mng                                      mng;
    video/x-ms-asf                                   asx asf;
    video/x-ms-wmv                                   wmv;
    video/x-msvideo                                  avi;
}
```

#### conf/fastcgi.conf

这个文件是一些 fastcgi 默认配置,在写一些配置时可以参考，知道某些值怎么从 nginx 里拿。

```ini

fastcgi_param  QUERY_STRING       $query_string;
fastcgi_param  REQUEST_METHOD     $request_method;
fastcgi_param  CONTENT_TYPE       $content_type;
fastcgi_param  CONTENT_LENGTH     $content_length;

fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
fastcgi_param  REQUEST_URI        $request_uri;
fastcgi_param  DOCUMENT_URI       $document_uri;
fastcgi_param  DOCUMENT_ROOT      $document_root;
fastcgi_param  SERVER_PROTOCOL    $server_protocol;
fastcgi_param  REQUEST_SCHEME     $scheme;
fastcgi_param  HTTPS              $https if_not_empty;

fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;

fastcgi_param  REMOTE_ADDR        $remote_addr;
fastcgi_param  REMOTE_PORT        $remote_port;
fastcgi_param  SERVER_ADDR        $server_addr;
fastcgi_param  SERVER_PORT        $server_port;
fastcgi_param  SERVER_NAME        $server_name;

# PHP only, required if PHP was built with --enable-force-cgi-redirect
fastcgi_param  REDIRECT_STATUS    200;
```

### 通过 UserAgent 头定向到不同端

```ini
# 定义User Agent匹配规则 $device_type 变量
set $device_type "desktop";

# 匹配移动设备User Agent
if ($http_user_agent ~* "(Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|Mobile)") {
	set $device_type "mobile";
}

# 匹配搜索引擎爬虫
if ($http_user_agent ~* "(Baidu|Googlebot|Bingbot|Yahoo! Slurp|Sogou|360Spider)") {
	set $device_type "spider";
}

# 代理
location / {
  # 这些代理配置不允许被写到 if 里面所以放这里。
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Real-Port $remote_port;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Port $server_port;
  proxy_set_header REMOTE-HOST $remote_addr;

  proxy_connect_timeout 60s;
  proxy_send_timeout 600s;
  proxy_read_timeout 600s;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection $connection_upgrade;

  # 指定移动端代理
  if ($device_type = "mobile") {
    proxy_pass http://127.0.0.1:3000;
    break;
  }

  # 指定爬虫端代理
  if ($device_type = "spider") {
    proxy_pass http://127.0.0.1:3001;
    break;
  }

  # 这部分是 PHP 项目的重写配置。
  if (!-e $request_filename){
    rewrite ^(.*)$ /index.php/$1 last;
    break;
  }
}
```
