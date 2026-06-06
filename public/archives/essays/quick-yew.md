# [草稿] yew 速查

- [yew](https://github.com/yewstack/yew)

老牌前端框架，rust 写前端页面，亮点是生成 WASM 仿 react 风格。

```bash
# 添加编译目标支持 wasm32
rustup target add wasm32-unknown-unknown
```

## 创建

### 通过模板创建

```bash
# 创建项目 基于 cargo-generate 模板生成
cargo generate yewstack/yew-trunk-minimal-template

# 运行项目
trunk serve
```

### 基于 cargo 原始项目创建

```toml
# 创建 cargo 基础项目引入依赖
yew = { version = "0.23", features = ["csr"] }
```