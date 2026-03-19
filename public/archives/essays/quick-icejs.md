# [草稿]ice.js 速查

```bash
# 创建
npm create ice ice-app
# 创建 ice-app 目录，指定生成最小的框架，只 web 。
npm create ice ice-app --template @ice/lite-scaffold
# 创建 ice-app 目录，指定生成有小程序相关的框架。
npm create ice ice-app --template @ice/miniapp-scaffold
```

## 插件

icejs 由于跨平台不能直接使用 react 的一些库。

```bash
# 状态管理，需要装插件。
npm i @ice/plugin-store -D

# HTTP 客户端，需要特殊的插件。
npm i @ice/plugin-request -D

# 权限管理
 npm i @ice/plugin-auth -D

# 阿里 fusion 组件库（不知道适配个桌面 UI 库干嘛？），插件。https://github.com/alibaba-fusion/next
npm i -D @ice/plugin-fusion

# 阿里 antd 组件库（不知道适配个桌面 UI 库干嘛？），插件
npm i -D @ice/plugin-antd
```