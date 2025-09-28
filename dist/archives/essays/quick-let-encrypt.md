# let'encrypt 速查

这是一个提供免费证书的公益服务，但是因为起步较晚，有部分老设备是没有安装其CA根证书，导致这部分旧设备识别其发布的证书为不安全。

[在线证书检验站点](https://www.ssllabs.com/ssltest/)

## Android 查看其证书是否安装

```bash
# 进入 shell
adb shell

# 查看 Let Encrypt 证书是否安装 
# 按理会查到 ISRG Root X1  和 ISRG Root X2
cat /system/etc/security/cacerts/* | grep ISRG
```

## Nginx 自动证书

### apt 下 certbot 方式

```bash
# 安装 nginx
apt install nginx

# 安装 certbot
apt install certbot

# 安装 python3 插件
apt install python3-certbot-nginx
# 安装 python2 插件（旧，比较老系统使用 python2 用这个）
apt install python2-certbot-nginx

# 测试 nginx 配置 后 重启 nginx
nginx -t && nginx -s reload

# 通过 创建文件方式 生成证书
certbot --nginx -d example.com -d www.example.com
# 通过 TXT 解析 生成证书，需要域名服务商的账号解析 TXT（_acme-challenge.www.example.com）
sudo certbot certonly --manual --preferred-challenge dns -d www.example.com

# 打开配置
certbot -e

# 配置内容，定期调用 renew 
0 12 * * * /usr/bin/certbot renew --quiet

# 测试自动续签
certbot renew --dry-run
```

```bash
# 查询 TXT 解析
nslookup -qt=TXT _acme-challenge.www.example.com
```

```bash
# 重签证书 TXT解析方式：指定 hook, au.sh 脚本可以通过变量 $CERTBOT_VALIDATION 得到需要配置到  _acme-challenge.* 的文本，自己根据自己的服务商发起调用修改。
certbot renew --manual-auth-hook /root/au.sh --dry-run
```
