# [草稿]tauri 速查

- [tauri 源码](https://github.com/tauri-apps/tauri)
- [tao](https://github.com/tauri-apps/tao) 跨平台窗口统一封装库。
- [tauri-egui](https://github.com/tauri-apps/tauri-egui) 在 tauri 使用 egui 的插件。
- [plugins-workspace](https://github.com/tauri-apps/plugins-workspace) 官方插件库源码
- [vue-cli-plugin-tauri](https://github.com/tauri-apps/vue-cli-plugin-tauri) tauri vue-cli 插件。

## 常用命令

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

### npm

使用 TS/JS 做前端用 npm 这类 nodejs 包管理比较适配。

```bash
# 安装命令行工具。
npm install --save-dev @tauri-apps/cli@latest
# 创建项目，前端可以是 TS/JS、Rust、.NET 等。
npm create tauri-app@latest

# 初始化 安卓 打包
npm run tauri android init
# 安卓 调试（需要管理员权限，需要翻墙。需要适配低版本的 gradle 和 java 比较麻烦。）
npm run tauri android dev
npm run tauri android run
# 安卓 打包（需要管理员权限，需要翻墙。需要适配低版本的 gradle 和 java 比较麻烦。不要在 PowerShell 下调用参数，传递不过去，用 CMD 运行。）
npm run tauri android build -- --apk --target aarch64 armv7
```

### cargo

使用 rust 做前端用 cargo 包管理比较适配。

```bash
# 安装 tauri-cli 工具。
cargo install tauri-cli --version "^2.0.0" --locked
```

## 常用库

## 示例、项目

- [niva](https://github.com/bramblex/niva)
