# Android 速查

## CA 证书

某些时候如果你的网站使用了 Let's Encrypt 的免费证书，一些老设备是没有装它的CA证书的，
所以是不认可它发的证书的，如果设备是自己内部使用，可以找到 CA 目录把它的证书装上去，
如果是不可控制的用户设备，那么建议买一些老品牌的证书，确保证书能被老设备识别。

CA 根证书存放目录 /system/etc/security/cacerts/
设置 》 证书管理（搜索“证书”）

调试下 adb 命令行查看方式：
```bash
# 进入 shell
adb shell

# 查看 Let Encrypt 证书是否安装 
# 按理会查到 ISRG Root X1  和 ISRG Root X2
cat /system/etc/security/cacerts/* | grep ISRG
```
