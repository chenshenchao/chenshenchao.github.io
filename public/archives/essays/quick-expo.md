# [草稿] expo 速查

目前最稳定的 React Native 的项目，技术栈类似 uniapp 的移动端（安卓、IOS）开发，同样要安装一个基座（Expo Go）连接后通过基座调试项目。

```powershell
$env:HTTP_PROXY="http://127.0.0.1:10808"
$env:HTTPS_PROXY="http://127.0.0.1:10808"
```

注：由于是海外项目，基座、各种基座模块的下载都受墙影响。

- [expo](https://github.com/expo/expo)
- [Orbit](https://github.com/expo/orbit) 是跨平台的模拟器。

```bash
# 安装 EAS 命令行工具。
# EAS（Expo Application Services） 是 Expo 官方提供的一套云端托管服务，提供类似 uniapp 云打包服务。
npm install -g eas-cli

# 给项目添加 id，需要填 EAS 的账号密码登录。
eas init --id 9d1266ef-2e4c-4c14-b075-0a98382ea559

# 构建全部
eas build --platform all
# 构建安卓
eas build --platform android # 打包的是 aab 格式。
# 查看构建
eas build:list
```

```bash
# 创建项目
npx create-expo-app@latest
npx create-expo-app@latest --template default@sdk-56

# 添加 SKILLS 
npx skills add expo/skills

# 检查项目
npx expo-doctor

# 安装开发客户端
npx expo install expo-dev-client
```

```bash
# 启动，会输出 二维码、URL 等用于基座连接。
npx expo start

# 生成预构建物。
npx expo prebuild

# 启动安卓项目，因为墙的原因，很多功能不能用，这种方式比较适合脱机直接插 USB 开发。
npm run android
npx expo run:android
npx expo run:ios

# 安装包
npx expo install package-name

npx expo lint
```

```bash
# 安装 路由导航库 https://reactnavigation.org/docs/hello-react-navigation?config=static
npm install @react-navigation/native 
npm install @react-navigation/native-stack
npm install @react-navigation/elements
```

```bash
npx expo install expo-image
npx expo install expo-camera
```