# 微信（WeChat）速查

[微信公众平台](https://mp.weixin.qq.com/)

- [taro](https://github.com/nervjs/taro) 京东开源，跨平台开发框架，React 技术栈。
- [uniapp](https://uniapp.dcloud.net.cn/) 闭源，跨平台开发框架，Vue 技术栈。

## 公众号

- [公众号测试号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)

## 小程序

- [小程序测试号](https://mp.weixin.qq.com/wxamp/sandbox)

使用 npm 时，每次引入新的 npm 包，都要手动通过“工具 》 构建 npm” 构建。而且 js 和 ts 的 npm 配置目录还不一致。

### 常用库

- [tdesign](https://github.com/Tencent/tdesign-miniprogram) 腾讯 UI 库。
- [kbone](https://github.com/Tencent/kbone) 腾讯开发的 Web 与微信小程序同构解决方案。
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

### 常用接口

```js
// 获取微信开放平台设置的协议信息。
wx.getPrivacySetting
```

## 微信接口

### access_token 的处理

微信的API在调用前，都需要有 access_token ，而 access_token 有效期 2 小时，且只保证最后一次调用获取的有效。
所以在多个项目共用一个微信公众号或者小程序的时候，要确保 access_token 的共享，防止频繁调用 access_token 导致多项目竞抢。
最简单的做法就是存到同一个 Redis 里面，这样使用共享同一个缓存问题也就解决了。

## 微信支付

随着政策的变动，微信支付的接口也在变动，现在是 APIv3 版本。

[官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012062524)

### 商户平台 与 合作伙伴平台

商户：为普通商户、也称直连商户，业务基本在“商户平台”处理。
合作伙伴：指“面包多”、“通联支付”此类支付代理服务商,提供：分账、代理支付等服务，业务基本在“合作伙伴平台”处理。

### 扣费服务、预约扣费、自动扣费

普通商户只能预约单词收费，也就是延期付费而已，基本没有实用性。
周期扣费，需要申请“特定行业周期扣费”，如：保险、教育、会员订阅等。

被单独分开，不在支付文档里了：
[官方文档 介绍](https://pay.wechatpay.cn/doc/v3/merchant/4012161105)
[官方文档 签约](https://pay.wechatpay.cn/doc/v3/merchant/4012525209)
[官方文档 预约](https://pay.wechatpay.cn/doc/v3/merchant/4012467036)

基本流程：
1. 微信支付后台，申请模板，填写 周期扣费还是单次扣费 等信息并创建。
2. 使用“模板ID” 发起 预签约，得到“预签约ID”。
3. 通过“预签约ID”在客户端唤起签约（不同平台各异），用户同意签约进入下一步。
4. 之后在微信允许的时间段，通过定时任务等调用接口向用户推送付款通知，用户同意就付款。用户没有同意，隔段时间可以再重发，用户不同意是不会付钱的。

#### 普通微信查看自己签约的自动扣费信息

目前的入口在（笑，估计一直被投诉，直接放客服中心了。）：
钱包 》 客服中心 》 管理自动扣费

