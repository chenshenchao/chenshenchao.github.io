# [草稿] VSCode 速查 

- [vscode](https://github.com/microsoft/vscode)
- [monaco-editor](https://github.com/microsoft/monaco-editor)
- [vscode-codicons](https://github.com/microsoft/vscode-codicons) 微软提供的图标库。
- [vscode-webview-ui-toolkit](https://github.com/microsoft/vscode-webview-ui-toolkit) 微软提供的 UI 工具库，已弃用。
- [vscode-react-webviews](https://github.com/githubnext/vscode-react-webviews)
- [vite-plugin-vscode](https://github.com/tomjs/vite-plugin-vscode) 第三方提供的 vite 适配 Vue、React 插件开发库。

## 三方插件

- [vscode-rainbow-fart](https://github.com/SaekiRaku/vscode-rainbow-fart) 自动播放彩虹屁的插件。

## 开发插件

```bash
# 全局安装工具
npm -g i yo generator-code

# 使用工具开始创建
yo code
```

```bash
# 不安装工具，以包的形式使用 yo 直接创建项目。
npx --package yo --package generator-code -- yo code
```