# Taro 速查

- [官方文档](https://docs.taro.zone/docs/)
- [taro 源码](https://github.com/nervjs/taro)

京东开源，跨平台开发框架，早期 React 技术栈，后扩展支持 Vue、Nerv 。
小程序兼容还是有问题，全新的项目创建后就会报错。
通过翻译成 React-Native 和 Flutter 实现的 APP 开发。

## 常用库

- [tarojs-plugin-ssr](https://github.com/NervJS/tarojs-plugin-ssr) 让 Taro H5 支持 SSR 扩展。
- [taro React Native 开发文档](https://docs.taro.zone/docs/react-native)
- [taro-native-shell](https://github.com/NervJS/taro-native-shell) 基于 expo 的壳。

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

taro 会生成到微信小程序项目的文件：

1. project.config.json 生成 微信小程序 dist/project.config.json
2. src/app.config.ts 生成 微信小程序 dist/app.json
3. config/index.ts 的可以配置复制文件，需要拷贝资源文件需要配置此处。
4. config/index.ts 里默认小程序不支持 cssModules 需要自己手动开启。（vite 打包的项目无效，此 BUG 截止 2026年4月29日未修复）
5. .env.development 和 .env.production 可以配置不同环境下的小程序ID。

```ts
{
  copy: {
    patterns: [
      {
        from: 'src/images/tab',
        to: 'images/tab', // vite 这个自动适配 dist, webpack5 需要 dist 前缀，不然复制到 dist 外面。
        ignore: []
      }
    ],
    options: {
    }
  }
}
```

```ts
{
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
  },
 }
```

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
