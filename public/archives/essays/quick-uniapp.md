# UniApp 速查

- [uView](https://github.com/umicro/uView2.0) UI 库。

[命令行创建项目文档](https://uniapp.dcloud.net.cn/quickstart-cli.html) 默认 HBuilderX 只提供 JS 的模板，如果要使用 TS 就必须使用命令行创建项目。

```bat
@rem 创建 TS + Vue3 项目
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

@rem 拉取包
npm i

@rem 更新 uniapp 依赖为最新，不然刚创建的版本一般会和开发工具对不上。
npx @dcloudio/uvm@latest
```

## 常见问题

1. 微信小程序如果使用 SWC ，每次重新打开微信开发者工具都会丢失这个设置，需要手动设置回去。
2. uni.addInterceptor 拦截 navigateTo 后 invoke 返回 false 后 navigateTo 会直接废掉。
3. uni.showToast 因同 wx.showToast 而 icon 非 'none' 时只能显示单行8字。

### renderjs

直接在 WebView 中执行JS的方法，renderjs 只支持 APP 和 H5，不支持小程序平台。

### WXS

小程序端用来在 WebView 中执行JS的方法。

### [nvue 原生插件](https://uniapp.dcloud.net.cn/tutorial/nvue-api.html)

由于 nvue 使用 Weex 做渲染，没有 WebView 环境，所以没有 DOM 就不能使用 renderjs ，而要操作元素就得使用原生插件。

```ts
uni.requireNativePlugin('dom') // 仿 dom 方式的元素操作插件
uni.requireNativePlugin('animation') // 动画插件
const Binding = uni.requireNativePlugin('bindingx') // 元素绑定插件
```

### 路由与权限

1. 必须自定义 Tabbar 以接管 Tabbar 的事件，靠 pages.json 配置底部栏无法拦截
2. 通过 uni.addInterceptor 拦截导航的几个函数做处理。

```ts
const getCurrentRoute = () => {
    // 这个 page 的类型不支持 console.log 打印，
    // 需要指定具体字段。不然会出现不报错，但是程序中断的情况。
    // 这种会影响调试判断。
    const pages = getCurrentPages();
    const page = pages[pages.length - 1]; // 当前页面。
    console.log(`pages: ${pages.length} ${page.route}`);
    return page.route;
}

// 几个路由函数如下，根据需求做拦截。
const ROUTE_NAV_FUNC = [
	'navigateTo',
	'redirectTo',
	'reLaunch',
	'switchTab',
];
const ROUTE_BACK_FUNC = 'navigateBack';

uni.addInterceptor('navigateTo', {
    invoke(e) {
        if (e.url?.indexOf("cantin") >= 0) { // 这个条件自己限定
            e.url = getCurrentRoute();
            console.log(`重定向到 ${e.url}`);
        }

        // 不要听网上的返回 false,会导致整个 navigateTo 从此废掉，调用无作用，不能路由。
        // return false;
    },
});
```

### 状态管理与持久化

使用 HBuilderX 的项目不需要安装 pinia ，而使用命令行创建的要手动安装。
[uniapp 使用 pinia 相关文档](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)

uniapp 的项目管理依赖管理很糟糕，pinia 的安装会遇到不可复现的情况，有时候会出现下面几种情况：

1. pinia 与 vue3 的版本有对应的要求，uniapp 目前时 vue@3.4 对应 pinia@2.2.4 版本。
2. 必须 npm install pinia --legacy-peer-deps 安装，装 2.2.4 不行。这样会装最新的，可能有兼容问题，要自己看情况。

uniapp Vue3 版本项目使用 pinia 的基本定式：

```ts
import { createSSRApp } from "vue";
import * as Pinia from 'pinia';
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  return {
    app,
	Pinia, // 必须返回 Pinia
  };
}
```

## 生命周期

### App.vue 应用生命周期

```ts
{
    onShow(res) {
        // res 就是 微信小程序 App({ onShow(res) {...}})
    }
}
```

### 页面生命周期

页面生命周期作为组件有 Vue 的组件生命周期外多出几个生命周期。

```ts
onLoad(() => {
    // 可以获得上次 App.onShow(res) 的内容，小程序开发使用。
    app.globalData.lastShowRes
});

// 页面触底，这个事件只能页面使用，非页面的组件虽然也可以挂载，但不要使用。
// 因为组件被 v-if 删除后，旧组件没了，但是挂的 onReachBottom 还在，会有幽灵事件触发。
// 最好一个页面只挂载一个 onReachBottom 事件。
onReachBottom(() => {
    
});
```

### 组件生命周期

组件生命周期基本就是 Vue 的生命周期。
虽然 setup 模式下组件内页可以 import 到页面的生命周期挂载函数。
但是使用时要小心，如果组件被销毁重建等重复多次会导致幽灵事件被挂载并触发。

## 区分平台

### 编译宏区分平台

uniapp 使用单行注释里写类似 C 宏的方式来做编译宏。

- APP-PLUS：App
- APP-PLUS-NVUE：App nvue 页面
- H5：H5
- MP-WEIXIN：微信小程序
- MP-ALIPAY：支付宝小程序
- MP-BAIDU：百度小程序
- MP-TOUTIAO：头条小程序
- MP-LARK：飞书小程序
- MP-QQ：QQ 小程序
- MP：所有小程序平台

```js
// #ifdef APP-PLUS
console.log('这是 App 平台')
// #endif

// #ifdef H5
console.log('这是 H5 平台')
// #endif

// #ifdef MP-WEIXIN
console.log('这是微信小程序')
// #endif

// #ifdef APP-PLUS || MP-WEIXIN
console.log('这是 App 或 微信小程序')
// #endif
```

```xml
<!-- #ifdef APP-PLUS -->
<view>我只在 APP 显示</view>
<!-- #endif -->

<!-- #ifdef H5 -->
<view>我只在 H5 显示</view>
<!-- #endif -->

<!-- #ifdef MP-WEIXIN -->
<view>我只在微信小程序显示</view>
<!-- #endif -->
```

### 运行时区分平台

```js
// APP 平台
// 获取平台信息
const platform = uni.getSystemInfoSync().platform
console.log(platform) // android、ios、devtools 等
```

```js
// H5 和小程序平台。
// UNI_PLATFORM 可选值：app-plus、h5、mp-weixin、mp-alipay 等
if (process.env.UNI_PLATFORM === 'h5') {
    console.log('H5 平台')
}
```