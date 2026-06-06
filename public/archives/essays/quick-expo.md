# [草稿] expo 速查

目前最稳定的 React Native 的项目，技术栈类似 uniapp 的移动端（安卓、IOS）开发，同样要安装一个基座（Expo Go）连接后通过基座调试项目。

```powershell
$env:HTTP_PROXY="http://127.0.0.1:10808"
$env:HTTPS_PROXY="http://127.0.0.1:10808"
```

注：由于是海外项目，基座、各种基座模块的下载都受墙影响。

## 常用库

- [expo-wechat](https://github.com/likeSo/expo-wechat) 第三方微信库。

## 命令

会根据扩展名适用平台。

- .ios.tsx	仅 iOS
- .android.tsx	仅 Android
- .web.tsx	仅 Web 浏览器
- .native.tsx	iOS + Android（原生双端）

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

## 模块

- expo/config-plugins：插件配置，提供 ConfigPlugin、withAndroidManifest、withInfoPlist 。
- expo-router：路由，提供的 Stack（基础路由配置）、NativeTabs （原生底部标签栏和路由）、Tags（跨平台底部栏和路由）、Link。 
- expo-status-bar： 状态栏

```bash
# 提供 Image 
npx expo install expo-image

# 提供 ImagePicker 文件选择器
npx expo install expo-image-picker

# 相机
npx expo install expo-camera

# 文件系统
npx expo install expo-file-system

# 多媒体截屏  captureRef 函数。
npx expo install react-native-view-shot expo-media-library

# 热更新
npx expo install expo-updates

npx expo install package

npx expo install react-native-svg

npx expo install react-native-webview

# dom 转图片。
npm install dom-to-image
```

### 安卓本地打包

```bash
# 生成密钥
keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

```kts
// 配置 签名证书
    signingConfigs {
        release {
            storeFile file('my-upload-key.keystore')
            storePassword '123456'
            keyAlias 'my-key-alias'
            keyPassword '123456'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
```

```bash
# 编译后 aab 文件在 android/app/build/outputs/bundle/release 目录 
./gradlew app:bundleRelease

# 编译后 apk 文件在 android\app\build\outputs\apk\release 目录
./gradlew assembleRelease
```


## react native

渲染只有虚拟 DOM ，没有原生 DOM，由虚拟 DOM 翻译成原生组件。DevTools 只能看到命令行、网络等，看不到 DOM 元素。只能手机端 Inspect 查看原生元素。

- react-native： 提供 View、StyleSheet、Pressable、Text、TextInput、ScrollView 等基础组件；ImageSourcePropType 等基础类型；Dimensions, PixelRatio 等屏幕参数。
- react-native-gesture-handler： 提供基础手势操作 GestureHandlerRootView、GestureDetector 组件 和 Gesture 定义类。
- react-native-reanimated： 提供动画 Animated 组件 和 useAnimatedStyle（不能闭包函数）, useSharedValue, withSpring 等钩子。

```bash
# 安装 路由导航库 https://reactnavigation.org/docs/hello-react-navigation?config=static
npm install @react-navigation/native 

# 路由导航 Stack
npm install @react-navigation/native-stack 

# 路由导航相关元素
npm install @react-navigation/elements
```

### 常用库

- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) software-mansion 动画库。
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) software-mansion 平台原生触控与手势系统库。
- [react-native-wechat-lib](https://github.com/little-snow-fox/react-native-wechat-lib) 第三方微信库
- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage) 异步存储。
