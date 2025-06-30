# Android 速查

## 开发工具

### adb(Android Debuger) 安卓调试器

```bash
# 查看文档
adb help

# 列举设备
adb devices -l

# 安装软件
# -s 指定设备
adb -s emulator-5554 install /path/to/app.apk

# 下载文件
adb pull /remote/path /local/path

# 上传文件
adb push /local/path /remote/path
```

```bash
# 设置经纬度
adb -s emulator-5554 emu geo fix 116.770473 23.463044
```

adb forward 可以在宿主机器和调试目标机器之间建立网络的前向代理。

```bash
# 列举前向代理
adb forward --list

# 设置前向代理
# adb forward tcp:<host_port> tcp:<avd_port>
adb -s emulator-5554 forward tcp:8080 tcp:8081

# 删除
# adb forward --remove tcp:<host_port>
adb forward --remove tcp:8080
```

adb reverse 可以在宿主机器和调试目标机器之间建立网络的反向代理。

```bash
# 这种方式只能 模拟器到本地主机，如果要内网，加多个反向代理
# adb reverse tcp:<avd_port> tcp:<host_port>
adb -s emulator-5554 reverse tcp:8081 tcp:8080

# 列举反向代理
# adb reverse --list
adb reverse --list
adb -s emulator-5554 reverse --list

# 删除反向代理，tcp:<avd_port>
# adb reverse --remove tcp:<avd_port>
# 删除所有反向代理
# adb reverse --remove-all
adb reverse --remove tcp:8081
```

adb 的 shell 子命令可以远程在安卓里执行命令。

```bash
# 进入 shell
# -s 指定设备
# 进入后 exit 可退出
adb -s emulator-5554 shell

# 直接执行命令
# 后接命令可直接执行并打印结果
adb -s emulator-5554 shell ls
# 截屏
adb shell screencap /sdcard/screen.png
# 录像
adb shell screenrecord /sdcard/demo.mp4 --time-limit 10

# 修改 /system/build.prop 文件，去掉签名验证。
# 查看
adb shell getprop ro.install.3rd_cert
# 设置为不验证
adb shell setprop ro.install.3rd_cert false
# 重启
adb shell reboot
# 确保文件权限为 644 ，默认是 644，不是时需手动修改。
# 如果权限不够，进入 shell 处理。
adb shell chmod 644 /system/build.prop
```

[python-adb](https://github.com/google/python-adb) 一个纯 python 实现的 adb 库，已经停止维护。

## 使用 telnet 连接模拟器管理器

```bash
# 指定 host 和 port 链接
telnet localhost 5554

# 进入连接会话后需要认证
# 会有提示你在某个路径下打开文件找到token 
# auth <token>
auth token123456

# 列出重定向列表
redir list

# 设置重定向
# redir add protocol:host-port:guest-port
# protocol 只能是 tcp 或 udp
# host-port 宿主这边
# guest-port 虚拟机
redir add tcp:host-port:guest-port

# 删除
redir del protocol:host-port
```

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
