# [草稿] vizia 速查

- [vizia](https://github.com/vizia/vizia)

基于 skia-safe 渲染的声明式 UI 库，目前依赖库的构建有问题，skia-binaries 下载路径拼接错误。

```toml
# 只需要加入这个依赖
[dependencies]
vizia = {git = "https://github.com/vizia/vizia"}
#vizia = "0.4.0"
```