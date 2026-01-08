# Taro 速查

[官方文档](https://docs.taro.zone/docs/)
通过翻译成 React-Native 和 Flutter 实现的 APP 开发。

## 常用库

- [tarojs-plugin-ssr](https://github.com/NervJS/tarojs-plugin-ssr) 让 Taro H5 支持 SSR 扩展。
- [taro React Native 开发文档](https://docs.taro.zone/docs/react-native)

## 常用命令

```bash
# 安装命令行工具
npm install -g @tarojs/cli
npm install -g @tarojs/cli@latest

# 查看信息
taro info

# 诊断
taro doctor

# 创建项目 myApp
taro init myApp

# 构建项目
# --type 可以指定类型 weapp jd tt qq
taro build --type jd

## 微信小程序
npm run dev:weapp
npm run build:weapp

## 百度小程序
npm run dev:swan
npm run build:swan

# 支付宝小程序
npm run dev:alipay
npm run build:alipay

# 抖音 TikTok 小程序
npm run dev:tt
npm run build:tt

# H5
npm run dev:h5
npm run build:h5

# React Native
npm run build:rn --platform ios
npm run build:rn --platform android

# 在生成的项目里面打包
./gradlew assembleRelease
```

### 企业微信小程序

```bash
# 企业微信小程序需要多一个插件
npm i @tarojs/plugin-platform-weapp-qy

# 钉钉小程序
npm i @tarojs/plugin-platform-alipay-dd

# 支付宝 IOT 小程序
npm i @tarojs/plugin-platform-alipay-iot
```

```js
config = {
  // ...
  plugins: [
    "@tarojs/plugin-platform-weapp-qy",
    "@tarojs/plugin-platform-alipay-dd",
    "@tarojs/plugin-platform-alipay-iot",
  ],
};
```
