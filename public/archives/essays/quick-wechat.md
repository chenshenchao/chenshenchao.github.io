# 微信（WeChat）速查

[微信公众平台](https://mp.weixin.qq.com/)

- [taro](https://github.com/nervjs/taro) 京东开源，跨平台开发框架，React 技术栈。
- [uniapp](https://uniapp.dcloud.net.cn/) 闭源，跨平台开发框架，Vue 技术栈。

## 公众号

[公众号测试号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)

## 小程序

[小程序测试号](https://mp.weixin.qq.com/wxamp/sandbox)

使用 npm 时，每次引入新的 npm 包，都要手动通过“工具 》 构建 npm” 构建。而且 js 和 ts 的 npm 配置目录还不一致。

### 常用库

- [tdesign](https://github.com/Tencent/tdesign-miniprogram) 腾讯 UI 库。
- [weui](https://github.com/Tencent/weui) 腾讯 UI 库。
- [weui-wxss](https://github.com/Tencent/weui-wxss) 腾讯 WeUI 样式库。
- [coloruicss](https://github.com/weilanwl/coloruicss) 样式库。
- [vant-weapp](https://github.com/youzan/vant-weapp) 有赞 UI库。

### 开发与测试

因为预览的时候是用的真机微信，此时本地服务器是没有 HTTPS 证书的，会不能看到图片，必须要有 HTTPS 的图片。
可以部署有证书的服务器提供图片，或者用云服务商的 OSS、COS 服务提供图片，也可以通过以下生成测试图：

- https://picsum.photos/400/400?t=1 生成随机照片。
- https://placehold.co/400x400/transparent/ffffffff?text=Dev  生成带文字的图片，只能英文，中文是问号，被墙，自己开梯子。

### 设计稿与 rpx

微信小程序的 rpx 是以 750rpx = 100vw 规定的，也就是 750rpx 就是满屏。
所以给微信小程序做设计稿，按宽度 750px 设计，程序员只要把像素抄过去，就会自动适配。
