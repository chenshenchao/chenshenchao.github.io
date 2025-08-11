# Flutter 速查

```bash
# 诊断，查看环境设配情况
flutter doctor -v

# 运行指定 web 版本 chrome 下打开的端口号
# -d 是设备名，移动端需要输入的是该设备名，其他端可以输入 chrome、windows 这种。
flutter run -d chrome --web-port 8080

# 运行，不启用 impeller
flutter run --no-enable-impeller

# 在 flutter run 下可以通过以下输入操作调试（命令行有英文提示，以下是中文）
# r：热重载（Hot Reload）- 快速更新 UI，保留应用状态
# R：热重启（Hot Restart）- 重新启动应用，重置状态但比完全重启快
# h: 帮助文档
# d: 停止调试回到命令行输入，flutter run 的 app 仍然运行。
# c: 清除屏幕
# p：显示性能叠加层
# q：退出运行

# 监听调试日志
flutter logs
# --clear：查看日志前清空历史日志
flutter logs --clear
```

[dart 官方库](https://github.com/dart-lang/i18n) 日期格式化库 intl 等。
[flutter 官方库](https://github.com/flutter/packages) 包括 go_router，flutter_svg，video_player, webview_flutter 等功能库。
[flutter_web_plugins 官方库](https://docs.flutter.cn/ui/navigation/url-strategies/) web 官方扩展，临时解决 web 开发问题，估计之后会被合并到 flutter SDK。
[flutter 官方桌面实验性库](https://github.com/google/flutter-desktop-embedding) 提供一些桌面端实验性的功能，如 window_size。
[flutter 官方示例](https://github.com/flutter/samples)

## 常用库

- [bloc](https://github.com/felangel/bloc) 状态管理库，拆分成多个库，按需引入，支持 持久化(hydrated_bloc)，回放(replay_bloc) 等功能。
- [flutter_screenutil](https://github.com/OpenFlutter/flutter_screenutil) 类似 web 前端 vw vh 按屏幕等比缩放，适合移动端应用。
- [ResponsiveFramework](https://github.com/Codelessly/ResponsiveFramework) 类似 web 前端的多媒体，响应适配不同尺寸的屏幕，适合桌面应用。
- [fluttercommunity 的 plus_plugins](https://github.com/fluttercommunity/plus_plugins) 提供一些获取设备信息、网络设置信息、传感器信息的库。
- [fluttercommunity 的 font_awesome_flutter](https://github.com/fluttercommunity/font_awesome_flutter) [fontawesome](https://fontawesome.com/icons)图标库的flutter封装。
- [fluttercommunity 的 flutter_launcher_icons](https://github.com/fluttercommunity/flutter_launcher_icons) 开发工具扩展，可以通过命令行和 pubspec.yaml 的配置生成图标。
- [flutter_recorder](https://github.com/alnitak/flutter_recorder) 录音库，自带 FFT，兼容多平台。
- [flutter_slidable](https://github.com/letsar/flutter_slidable) 滑动单元格，类似 vant SwipeCell。
- [flutter_swipe_action_cell](https://github.com/luckysmg/flutter_swipe_action_cell) 滑动单元格，类似 vant SwipeCell。
- [audioplayers](https://github.com/bluefireteam/audioplayers) 音频播放库。
- [flame](https://github.com/flame-engine/flame) 游戏开发库，包括 3D、音频 等子库。
- [marquee](https://github.com/MarcelGarus/marquee) 文字走马灯。
- [marqueer](https://github.com/GeceGibi/marqueer) 走马灯，可以图片。
- [Pointy Castle](https://github.com/bcgit/pc-dart) 加密库。

## 常见问题

flutter run 等待锁，Flutter 安装目录下把 bin/cache/lockfile 文件删了。
