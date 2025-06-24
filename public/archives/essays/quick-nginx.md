# Nginx 速查

## 反向代理

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