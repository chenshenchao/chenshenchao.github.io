# Flutter 速查

Flutter 是一个比较早采用组合式开发的图形界面框架，但是也因为比较早所以在组合式上采用了面向对象范式，而不是早期的 imgui 或者后来的 React 和 Jetpack Compose 这种采用函数式范式，所以让 Flutter 的组合式显得很配置式，Container 就是一个无奈地返回配置式的组件。因为其习惯性的面向对象思维方式，采用继承、父子关系这种设计理念来开发，导致 Flutter 的组件数量多得夸张，组合的时候层数也多，其根本原因就在于把原本的配置给拆出来变成组件，然后让组件以父子关系组合。而后来的组合式图形框架则采用链式组合的方式，链式组合能显著降低层数。同时也因为面向对象的原因，链式实现和不可变冲突，所以导致链式发展不起来。而函数式本身就具有链式和不可变两种特性，天然地就采用链式组合。

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

- [dart 官方 core 库](https://github.com/dart-lang/core) 包括 async, crypto 等库。
- [dart 官方 i18n 库](https://github.com/dart-lang/i18n) 日期格式化库 intl 等。
- [dart 官方 build 库](https://github.com/dart-lang/build) 用于生成代码，如 build_runner 等。
- [flutter 官方库](https://github.com/flutter/packages) 包括 go_router，flutter_svg，video_player, webview_flutter 等功能库。
- [flutter_web_plugins 官方库](https://docs.flutter.cn/ui/navigation/url-strategies/) web 官方扩展，临时解决 web 开发问题，估计之后会被合并到 flutter SDK。
- [flutter 官方桌面实验性库](https://github.com/google/flutter-desktop-embedding) 提供一些桌面端实验性的功能，如 window_size。
- [flutter 官方示例](https://github.com/flutter/samples)

## 常用库

- [permission_handler](https://github.com/baseflow/flutter-permission-handler) 权限库。
- [image](https://github.com/brendan-duncan/image) 图片处理库。
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
- [pointycastle](https://github.com/bcgit/pc-dart) 加密库。
- [basic_utils](https://github.com/Ephenodrom/Dart-Basic-Utils) 基础库，比如各种密钥文件转换。
- [flutter_blue](https://github.com/pauldemarco/flutter_blue) 低功耗蓝牙库。
- [flutter_blue_plus](https://github.com/chipweinberger/flutter_blue_plus) flutter_blue 低功耗蓝牙库的后续开发库。
- [flutter_blue_plus_windows](https://github.com/chan150/flutter_blue_plus_windows) flutter_blue_plus 低功耗蓝牙库的Windows 扩展。
- [flutter_reactive_ble](https://github.com/PhilipsHue/flutter_reactive_ble) 低功耗蓝牙库。
- [bluetooth_classic](https://github.com/matfire/bluetooth_classic) 经典蓝牙库。
- [print_bluetooth_thermal](https://github.com/andresperezmelo/print_bluetooth_thermal) 蓝牙打印库。
- [flutter_esc_pos_utils](https://github.com/mjafartp/flutter_esc_pos_utils) ESC/POS 打印协议封装。

## 常见问题

flutter run 等待锁，Flutter 安装目录下把 bin/cache/lockfile 文件删了。
