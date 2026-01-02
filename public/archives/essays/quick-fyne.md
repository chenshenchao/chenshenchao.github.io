# [草稿]Fyne 速查

```bash
# 安装工具
go install fyne.io/tools/cmd/fyne@latest

# 创建项目
fyne init --app-id my.domain.appname

# 创建一般的 go 项目后，安装 fyne 库，再拉取依赖
go mod init <your_go_package>
go get fyne.io/fyne/v2@latest
go mod tidy
```

Icon.png 是必须的。

## 安卓

```bash
# Android Studio 用 ANDROID_SDK_ROOT 用于替代旧的 ANDROID_HOME，而 fyne 还是只认 ANDROID_HOME
# 需要指定 ANDROID SDK 和 NDK
set ANDROID_NDK_HOME=%ANDROID_HOME%/ndk/27.0.12077973

# 打包
fyne package --os android --app-id my.domain.appname

# 安装
fyne install --os android --app-id my.domain.appname

# 
keytool -list -printcert -jarfile fynedemo.apk

keytool -genkey -alias fynedemocert -keyalg RSA -keysize 2048 -validity 36500 -keystore fynedemocert.keystore

```

```bash
# 【旧】
# https://developer.android.com/tools/bundletool
# 自行下载并配置 脚本 类似 ./tools/bundletool.bat
# 1. 问题：
# fyne 不知道命中了哪个 aapt2 ，没有这个命令
# error: unknown command 'convert'.
# usage: aapt2 [compile|link|dump|diff|optimize|version]
# 1. 解决方案：
# 找到%ANDROID_HOME%/build-tools 目录，
# 删掉比较老的版本即可，fyne 脚本有问题，只命中第一个版本，
# 旧版本的 aapt2 缺少 fyne 用到的命令。

# 需要用到 unzip 命令，自行安装。
# zip unzip 是个linux 命令，Windows 下可下载 gnuwin32 
# 目前这个命令 直接用的 debugCert -keyStore 无效，期待新版本。
fyne release -os android -keyStore fynedemocert.keystore  -keyStorePass "123456" -keyName fynedemocert -keyPass "123456" -appID "my.domain.appname" -appVersion "1.0.1" -appBuild 1

# 应该不能通过这个，只做记录。
bundletool build-apks --bundle=fynedemo.apk --output=fynedemo-release.apks --ks=fynedemocert.keystore --ks-pass=pass:123456 --ks-key-alias=fynedemocert --key-pass=pass:123456
```