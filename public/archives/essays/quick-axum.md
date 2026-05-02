# [草稿] axum 速查

- [tokio](https://github.com/tokio-rs/tokio) 异步运行时。
- [axum](https://github.com/tokio-rs/axum) tokio 团队开发的 web 框架。
- [toasty](https://github.com/tokio-rs/toasty) tokio 开发组开发的异步 ORM。
- [prost](https://github.com/tokio-rs/prost) tokio 团队的 protobuf 实现。
- [tower](https://github.com/tower-rs) tokio 团队开发的 web 开发库集合，axum 的基础中间件。
- [hyper](https://github.com/hyperium/hyper) HTTP 协议库，提供 HTTP 服务端 和 客户端，axum 基于其服务端。
- [tonic](https://github.com/hyperium/tonic) hyper 团队开发的 grpc 实现。

```toml
# 基础依赖
axum = { workspace = true, }
tokio = { workspace = true, features = ["full"] }
```
