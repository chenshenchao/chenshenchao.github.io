# [草稿]Flutter 速查

```bash
# 诊断，查看环境设配情况
flutter doctor -v

# 运行指定 web 版本 chrome 下打开的端口号
flutter run -d chrome --web-port 8080
```

[官方库](https://github.com/flutter/packages) 包括 go_router，flutter_svg，video_player, webview_flutter 等功能库。

## 常用库

- [bloc](https://github.com/felangel/bloc) 状态管理库，拆分成多个库，按需引入，支持 持久化(hydrated_bloc)，回放(replay_bloc) 等功能。
- [flutter_screenutil](https://github.com/OpenFlutter/flutter_screenutil) 类似 web 前端 vw vh 按屏幕等比缩放，适合移动端应用。
- [ResponsiveFramework](https://github.com/Codelessly/ResponsiveFramework) 类似 web 前端的多媒体，响应适配不同尺寸的屏幕，适合桌面应用。
- [fluttercommunity plus_plugins](https://github.com/fluttercommunity/plus_plugins) 提供一些获取设备信息、网络设置信息、传感器信息的库。
