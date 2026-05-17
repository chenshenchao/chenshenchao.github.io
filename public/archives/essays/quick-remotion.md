# [草稿]remotion 速查

- [remotion](https://github.com/remotion-dev/remotion)

用代码制作视频，低于3人团队免费。

```bash
# 创建项目
npx create-video@latest
```

```bash
# 调试
npm run dev

# 打开编辑器
npx remotion studio

# 渲染（有墙，要处理 chrome 下载问题）
# 目录在 node_modules/.remotion/chrome-for-testing/win64/chrome-headless-shell-win64/
# node_modules/.remotion/chrome-for-testing/win64/VERSION 文件要写 chrome 的版本 比如：149.0.7790.0
npx remotion render

npx remotion browser ensure
```

## 基本概念

- Composition 作品
- Sequence 镜头
- Series 序列（串起镜头）
