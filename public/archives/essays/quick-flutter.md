# [草稿]Flutter 速查

```bash
# 诊断，查看环境设配情况
flutter doctor -v

# 运行指定 web 版本 chrome 下打开的端口号
flutter run -d chrome --web-port 8080
```

[官方库](https://github.com/flutter/packages) 包括 go_router，webview 等功能库。

## 常用库

- [bloc](https://github.com/felangel/bloc) 状态管理库，拆分成多个库，按需引入，支持 持久化(hydrated_bloc)，回放(replay_bloc) 等功能。