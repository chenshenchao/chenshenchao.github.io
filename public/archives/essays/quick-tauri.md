# [草稿]tauri 速查

- [tauri 源码](https://github.com/tauri-apps/tauri)
- [tao](https://github.com/tauri-apps/tao) 跨平台窗口统一封装库。
- [tauri-egui](https://github.com/tauri-apps/tauri-egui) 在 tauri 使用 egui 的插件。
- [plugins-workspace](https://github.com/tauri-apps/plugins-workspace) 官方插件库源码
- [vue-cli-plugin-tauri](https://github.com/tauri-apps/vue-cli-plugin-tauri) tauri vue-cli 插件。

## 常用命令

[命令行工具](https://v2.tauri.app/reference/cli/)
[权限文档](https://v2.tauri.app/learn/security/using-plugin-permissions/)

```bat
@rem cmd 设置代理
set HTTP_PROXY=http://127.0.0.1:10808
set HTTPS_PROXY=http://127.0.0.1:10808
```

```powershell
# Powershell 设置代理。
$env:HTTP_PROXY="http://127.0.0.1:10808"
$env:HTTPS_PROXY="http://127.0.0.1:10808"
```

## 创建项目

以下不同包管理器不要混用。

### npm

使用 TS/JS 做前端用 npm 这类 nodejs 包管理比较适配。

```bash
# 安装命令行工具。
npm install --save-dev @tauri-apps/cli@latest
# 创建项目，前端可以是 TS/JS、Rust、.NET 等。
npm create tauri-app@latest

# 运行调试
npm run tauri dev

# 初始化 安卓 打包
npm run tauri android init
# 安卓 调试（需要管理员权限，需要翻墙。需要适配低版本的 gradle 和 java 比较麻烦。）
npm run tauri android dev
npm run tauri android run
# 安卓 打包（需要管理员权限，需要翻墙。需要适配低版本的 gradle 和 java 比较麻烦。不要在 PowerShell 下调用参数，传递不过去，用 CMD 运行。）
npm run tauri android build -- --apk --target aarch64 armv7
```

### cargo

使用 rust 做前端用 cargo 包管理比较适配，比 npm 前端多出 WASM 的工具安装。

```bash
# 添加 wasm32 编译目标
rustup target add wasm32-unknown-unknown
# 安装 trunk 打包工具
cargo install trunk --locked
# 安装 wasm-bindgen 工具
cargo install wasm-bindgen-cli
```

```bash
# 安装 tauri-cli 工具。
cargo install tauri-cli --version "^2.0.0" --locked

# 创建项目
cargo install create-tauri-app --locked
cargo create-tauri-app

# 启动调试
cargo tauri dev

# 初始化安卓项目
cargo tauri android init
# 启动调试（Windows 下必须管理员权限）插上开发机或者打开模拟器，不然会弹出 Android Studio 
cargo tauri android dev
# 构建
cargo tauri android build
# 运行
cargo tauri android run
```

### 安卓安装

注：需要配置签名证书，不然打包后名字带 unsigned 的 apk 没有签名一般系统处于安全会不能安装。

[android 配置证书](https://v2.tauri.app/distribute/sign/android)

```bash
# JDK keytool生成正式密钥
keytool -genkey -v -keystore release.jks -alias tauri_app -keyalg RSA -keysize 2048 -validity 10000
```

创建文件 [project]/src-tauri/gen/android/keystore.properties 文件设置：

```ini
password=密码
keyAlias=tauri_app
storeFile=本地密钥文件路径： /Users/<user name>/upload-keystore.jks 或 C:\\Users\\<user name>\\upload-keystore.jks
```

```kts
import java.io.FileInputStream

signingConfigs {
    create("release") {
        val keystorePropertiesFile = rootProject.file("keystore.properties")
        val keystoreProperties = Properties()
        if (keystorePropertiesFile.exists()) {
            keystoreProperties.load(FileInputStream(keystorePropertiesFile))
        }

        keyAlias = keystoreProperties["keyAlias"] as String
        keyPassword = keystoreProperties["password"] as String
        storeFile = file(keystoreProperties["storeFile"] as String)
        storePassword = keystoreProperties["password"] as String
    }
}

buildTypes {
    getByName("release") {
        signingConfig = signingConfigs.getByName("release")
    }
}
```

## 常用库

## 示例、项目

- [niva](https://github.com/bramblex/niva)
