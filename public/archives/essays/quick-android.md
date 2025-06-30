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

### aapt(Android Asset Packaging Tool) 安卓资源包工具

在 Android SDK 的 build-tools 目录下。

```bash
# dump 出 apk 信息。
aapt dump badging /path/to/your.app
```

## 安卓命令

这些命令配合 adb shell 命令，可以在宿主机远程在目标的安卓系统内执行。

### am(Activity Manager) Activity 管理器

```bash
# 拨打电话
am start -a android.intent.action.CALL -d tel:12345678910

# 显示信息，和系统的默认处理有关。
am start -a android.intent.action.VIEW

# 杀指定后台进程
am kill <package>

# 杀所有后台进程
am kill-all

# 强杀进程
am force-stop

# 重启
am restart
```

### pm (Package Manager) 软件包管理

```bash
# 列举包
# -3 仅显示第三方软件包
pm list packages [options]

# 卸载软件包
# 通过查到的包名删除。
pm uninstall com.example.MyApp

# 输出系统用户
pm list users
```

### 输入（input）

详细键值信息，自行网上查找。

```bash
# 设备返回建
input keyevent 4

# 锁定
input keyevent 26

# 解锁屏幕
input keyevent 82

# 点击屏幕 50 250 位置。
input tap 50 250

# 滑动屏幕 (50,250) 到 (500, 250) 滑动 600ms
input swipe 50 250 500 250 600

# 字符输入 abc 是字符底层事件会被输入法捕获。
# 中文输入查看下面中文输入说明。
input text abc
```

输入中文需要安装[ADBKeyBoard](https://github.com/senzhk/ADBKeyBoard)。

1. 安装后需要在 语言与输入设置 里面启用这个输入法。
2. 把他设置成 默认的输入法 或者 确保在输入时使用该输入法。
3. 通过 broadcast 发送信息。

```bash
# GitHub 项目文件里有 apk 文件可安装。
adb install ADBKeyboard.apk

# 发送中文输入。
adb shell am broadcast -a ADB_INPUT_TEXT --es msg "你好"
```

### svc

服务控制

```bash
# 充电常亮设置，usb 为接入 USB 时常量。
svc power stayon [true|false|usb|ac]

# 开启或关闭数据流量
svc data enable
svc data disable

# 数据流量优先
svc data prefer

# 开启或关闭 Wifi
svc wifi enable
svc wifi disable

# Wifi优先
svc wifi prefer
```


### ime（Input Method Engine） 输入法引擎

```bash
# 查看有哪些输入法
ime list -a
```

### wm

```bash
# 屏幕分辨率
wm size
# 远程通过 ADB 执行
adb shell wm size
```


### dumpsys

```bash
# 列出当前窗口
dumpsys window windows
```

### getprop

```bash
# 获取 Android 版本
getprop ro.build.version.release
```



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
