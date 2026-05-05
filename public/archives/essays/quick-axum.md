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


## toasty

依赖：

```toml
tokio = { workspace = true, features = ["full"] }
toasty = { workspace = true, features = ["sqlite"]}
toasty-cli = { workspace = true, } # 迁移工具库。
```

### CodeFirst

#### 迁移命令工具构建

配置：

Toasty.toml

```toml
[migration]
path = "toasty" # 迁移脚本目录
prefix_style = "Sequential" # "Sequential" (0001_, 0002_) or "Timestamp" (20240112_153045_)
checksums = false # 开启 MD5 校验防篡改。
statement_breakpoints = true
```

执行：

```rust
// 比如这个文件是 migrate/src/main.rs
use toasty_cli::{Config, ToastyCli};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let config = Config::load()?;

    let db = toasty::Db::builder()
        .models(toasty::models!(crate::*))
        .connect("sqlite:./my_app.db")
        .await?;

    let cli = ToastyCli::with_config(db, config);
    cli.parse_and_run().await?;

    Ok(())
}
```


```bash
# migrate 是生成的可执行文件名
# 生成基本结构
cargo run --bin migrate -- migration generate
# 生成 add_posts_table 脚本
cargo run --bin migrate -- migration generate --name add_posts_table
# 执行脚本。
cargo run --bin migrate -- migration apply
# 查看快照
cargo run --bin migrate -- migration snapshot

# 指定名字撤回迁移脚本（破坏版本，最好不要用。）
cargo run --bin migrate -- migration drop --name 0001_add_posts_table.sql
# 撤回最后一条迁移脚本
cargo run --bin migrate -- migration drop --latest
# 交互式
cargo run --bin migrate -- migration drop

# 撤销所有迁移并再重新执行一遍。
cargo run --bin migrate -- migration reset

```

#### push_schema，由 entity 修改数据库

仅用于开发阶段快速验证想法，建议不要用。

```rust
let mut db = toasty::Db::builder()
    .models(toasty::models!(crate::*))
    .connect("sqlite::memory:")
    .await?;

db.push_schema().await?;
```