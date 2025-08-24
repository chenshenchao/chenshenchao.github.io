# 微信（WeChat）速查

[微信公众平台](https://mp.weixin.qq.com/)

## 公众号

[公众号测试号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)

## 小程序

[小程序测试号](https://mp.weixin.qq.com/wxamp/sandbox)

### 开发与测试

因为预览的时候是用的真机微信，此时本地服务器是没有 HTTPS 证书的，会不能看到图片，必须要有 HTTPS 的图片。
可以部署有证书的服务器提供图片，或者用云服务商的 OSS、COS 服务提供图片，也可以通过以下生成测试图：

- https://picsum.photos/400/400?t=1 生成随机照片。
- https://placehold.co/400x400/transparent/ffffffff?text=Dev  生成带文字的图片，只能英文，中文是问号，被墙，自己开梯子。

### 设计稿与 rpx

微信小程序的 rpx 是以 750rpx = 100vw 规定的，也就是 750rpx 就是满屏。
所以给微信小程序做设计稿，按宽度 750px 设计，程序员只要把像素抄过去，就会自动适配。
