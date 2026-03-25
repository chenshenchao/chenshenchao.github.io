# [草稿]leptos 速查

- [leptos](https://github.com/leptos-rs/leptos)
- [cargo-leptos](https://github.com/leptos-rs/cargo-leptos) leptos 的 cargo 命令扩展工具。 
- [start-axum](https://github.com/leptos-rs/start-axum) leptos 使用 axum 后端的模板。
- [start-axum-workspace](https://github.com/leptos-rs/start-axum-workspace) leptos 使用 axum 后端的前后端分开子项目的模板。
- [start-actix](https://github.com/leptos-rs/start-actix) leptos 使用 actix 后端的模板。
- [start-actix-0.6](https://github.com/leptos-rs/start-actix-0.6)

全栈框架，rust 写前端页面，支持类 react 的 jsx-like 风格 和 链式 builder 风格，无 VDOM 开销，支持水合。

```bash
# 需要支持 WASM 的目标。
rustup target add wasm32-unknown-unknown

# 安装命令行工具（需要编译，有C库依赖，建议使用 binstall）
cargo install cargo-leptos

# 创建基于 axum 后端的项目。
cargo leptos new --git https://github.com/leptos-rs/start-axum

# 使用 watch
cargo leptos watch
cargo leptos watch -p home

# 启动服务器
cargo leptos serve
cargo leptos serve -p home

# 可以指定 ssr 特性运行或编译。
cargo run -p app --fetures ssr
cargo build -p app --fetures ssr
```