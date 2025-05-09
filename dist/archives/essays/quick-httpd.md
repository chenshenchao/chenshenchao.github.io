# Apache httpd 速查

因为 Nginx 的出现，现在使用 httpd 作为 HTTP 服务器 或者 反向代理 的越来越少了。但是总还是会有一些比较老的项目在使用，所以记录下一些信息以便遇到了方便查找。

## 配置

httpd 以 XML 为配置文件。

### 虚拟主机(VirtualHost)

```xml
<VirtualHost *:80>
    DocumentRoot "/path/to/host"
    <Directory "/path/to/host">
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    ErrorLog "/path/to/host/error.log"
    CustomLog "/path/to/host/access.log"
</VirtualHost>
```

### PHP 模块加载

```xml
<IfDefine PHP7_2_0>
    PHPIniDir "/path/to/php_ini_dir"
    LoadModule php7_module "/path/to/php7apache2_4.dll"
</IfDefine>
```

### 重写模块 mod_rewrite.c

使用 PHP 框架的话，大部分的框架会要求单一入口指向 index.php 文件。

```xml
<IfModule mod_rewrite.c>
    Options +FollowSymlinks -Multiviews
    RewriteEngine On

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index.php?s=$1 [QSA,PT,L]
</IfModule>
```