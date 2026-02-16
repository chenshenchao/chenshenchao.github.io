# rust 速查

Rust 和 C++ 一样有很强的类型推到能力，但是这就导致很多隐式转换，不过因为是通过 trait From Into 和泛型约束，不是使用构造函数所以不会有 C++ 构造函数命中奇怪类型的问题。

'static 是一个名字带有误解的生命周期：
1. 当作用引用时 &'static str 要求被引用实例的生命周期如静态变量要整个程序运行周期
2. 而作用在实例时 T 'static 则是实例要完整的生命周期可控。
所以用 static 作为这个生命周期的名字就很容易造成误解，感觉用 'all 都比 'static 好。

## Option 和 Result

```rust
// as_ref: Option<String> => Option<&String>
// as_deref: Option<String> => Option<&'a str>
// as_deref: Result<String,Error> => Result<&'a str, &Error>
let a: Option<String> = Some("a".to_string());
let b: Option<&str> = a.as_deref(); // 等价下面
let c: Option<&str> = a.as_ref().map(|s| s.deref());
```

## rustup

rustup 用于安装和更新 rust 编译构造工具。

由于“墙”，需要配置国内镜像源。

```bash
# Linux 配置 清华源
export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup

# Linux 配置 华中科技大学源
export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
```

```bat
@rem Windows cmd 配置 清华源
set RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup

@rem Windows cmd 配置 华中科技大学源
set RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
set RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
```

```bash
# 更新
rustup update

# 添加 linux 目标用作交叉编译
rustup target add x86_64-unknown-linux-musl

# 列举所有编译工具集合
rustup target list

# 查看信息 可查看已安装 target
rustup show
```

### toolchain

```bash
# 查看 帮助
rustup help toolchain

# 查看 工具链列表
rustup toolchain list

# 安装 指定的工具链 1.75.0-x86_64-pc-windows-msvc
rustup install 1.75.0-x86_64-pc-windows-msvc

# 切换到 1.75.0-x86_64-pc-windows-msvc 这个工具链
rustup default 1.75.0-x86_64-pc-windows-msvc

# 切回目前最新的版本
rustup default stable-x86_64-pc-windows-msvc
```

## C 混编的问题

### glibc 不匹配报错

```bash
# 查看 glic6 版本，编译后 rust 的动态库依赖，必须匹配 Linux 系统的 glibc 版本。
strings /lib/libc.so.6 | grep GLIBC_
```

### 使用 [musl](https://musl.cc) 取代 glibc

#### Ubuntu 使用 apt 安装 musl

```bash
# 会自动安装 musl-dev
apt install musl-tools
```

#### Linux 下手动编译 musl

```bash
# 下载 musl
wget https://musl.libc.org/releases/musl-1.2.4.tar.gz

# 解压
tar zxvf musl-1.2.4.tar.gz

#
cd musl-1.2.4
./configure
make
make install
```

```bash
# 指定编译目标 linux musl
cargo build --release --target=x86_64-unknown-linux-musl
```

## cargo

包管理工具。

- [官方仓库](https://crates.io)
- [cargo binstall](https://github.com/cargo-bins/cargo-binstall) 对于使用了 C/C++ 的非纯 rust 工具，cargo install 需要配置环境很麻烦，用 binstall 可以直接下载编译好的来安装。
- [cargo-edit](https://github.com/killercup/cargo-edit) 通过命令行来修改 Cargo.toml 文件。（挺搞笑的扩展）

### 配置镜像

~/.cargo 目录下，可以创建 config.toml（旧版叫 config 没有.toml 后缀） 文件配置镜像。
这个 config（旧版叫 config 没有.toml 后缀） 文件不一定有，没有自己创建。

```ini
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"

[source.tuna]
registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"

# 指定 msvc 静态链接 crt
[target.x86_64-pc-windows-msvc]
rustflags = ["-C", "target-feature=+crt-static"]
```

### 常用命令

```bash
# 可执行文件
cargo new --bin yourapp
# 库
cargo new --lib yourlib

# init 唯一区别于 new 的点就是 不会建目录，而是在目录内初始化。
cargo init --bin yourapp

# workspace 指定构建项目
# -p 更通用，可以指定 lib 库类型
cargo build -p yourapp
cargo build --bin yourapp

# workspace 指定构建项目
# -p 更通用
cargo build -p yourapp
cargo build --bin yourapp

# 指定编译目标
cargo build --release --target=x86_64-unknown-linux-musl
```

```bash
# 升级指定库（可以是间接依赖库）到最新版本。 
cargo update -p aws_lc_rs

# 回退库 cargo_metadata 到指定版本
cargo update -p cargo_metadata --precise 0.19.0
```

### cargo generate

模板生成工具。

```bash
# 全局安装该工具
cargo install cargo-generate

# 指定 git 安装模板(这里是 slint 的示例)
cargo generate --git https://github.com/slint-ui/slint-rust-template
```

### cargo watch

类似 nodemon 这种监听代码变化并自动重启命令的命令工具。

```bash
# 安装
cargo install cargo-watch

# -w 指定监听源码目录
# -x 指定要执行的命令
cargo watch -w src/ -x run
```

## 交叉编译

### Windows 下交叉编译

注：编译的时候有各种缓存问题，如果问题不能复现，可能是缓存不一致导致。
注：交叉编译遇到 依赖 C 库的库时需要安装对应的编译工具和依赖库，很是麻烦。建议使用 WSL 去编译。

Windows 10 下载工具集：
[x86_64-w64-mingw32-cross](https://musl.cc/x86_64-w64-mingw32-cross.tgz)
解压并添加目录下 bin 目录到 PATH 里面。
修改 ~/.cargo/config.toml ，添加编译参数 配置链接器为 lld：

```ini
[target.x86_64-unknown-linux-musl]
linker = "x86_64-w64-mingw32-gcc"
rustflags = ["-Clinker=rust-lld"]
# 这2个 rustflags 应该是一个意思，但是可能由于编译器版本需要使用指定的。我是使用上面这个。
rustflags = ["-C", "linker-flavor=ld.lld"]

# 添加 linux 目标用作交叉编译
rustup target add x86_64-unknown-linux-musl

# 指定编译目标
cargo build --release --target=x86_64-unknown-linux-musl
```

### cross

使用 docker 进行编译的交叉编译工具。

```bash
# 安装 cross
cargo install cross --git https://github.com/cross-rs/cross
```

TODO: 找时间试试。

### wsl

```bat
@rem 关闭再打开 = 重启
wsl --shutdown
wsl
```

```bat
@rem 切换 默认系统
wslconfig /setdefault Ubuntu-22.04
```

```bash
# 安装 rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# vim 打开 /etc/profile 把 PATH 的修改命令写入
vi /etc/profile
```

```bash
# 如果 $HOME/.cargo/bin 存在则加入 PATH
if [ -d "$HOME/.cargo/bin" ] ; then
	PATH="$HOME/.cargo/bin:$PATH"
fi
```

注：需要手动添加 $HOME/.cargo/bin 到 PATH 环境变量，不然找不到 rustup

## 官方库

- [futures](https://github.com/rust-lang/futures-rs) 异步支持库。

## 常用库

- [prost](https://github.com/tokio-rs/prost) tokio 团队的 protobuf 实现,actix 的 protobuf 扩展此库(0.13)。
- [rust-protobuf](https://github.com/stepancheg/rust-protobuf) protobuf 第三方实现。
- [tonic](https://github.com/hyperium/tonic) grpc 第三方实现。
- [reqwest](https://github.com/seanmonstar/reqwest) HTTP 客户端。
- [RustCrypto](https://github.com/RustCrypto) 加密库集合。
- [curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) curve25519 加密库。
- [hex](https://github.com/KokaKiwi/rust-hex) 十六进制转换库。
- [tracing](https://github.com/tokio-rs/tracing) tokio 团队开发的跟踪诊断库集合。
- [if-addrs](https://github.com/messense/if-addrs) 本地网络地址。
- [lazy_static](https://github.com/rust-lang-nursery/lazy-static.rs) 懒加载，因为标准库已经有 LazyLock 所以基本不用了。
- [tch](https://github.com/LaurentMazare/tch-rs) 封装 pytorch 的 c++ 版本绑定 rust
- [burn](https://github.com/tracel-ai/burn) 纯 rust 的深度学习框架。
- [candle](https://github.com/huggingface/candle) huggingface 开发的机器学习框架。
- [ndarray](https://github.com/rust-ndarray/ndarray) 类似 python 的 numpy
- [ort](https://github.com/pykeio/ort) ONNX 格式 rust 库。
- [image](https://github.com/image-rs/image) 图片处理库。
- [ico](https://github.com/mdsteele/rust-ico) ico 图标处理库。
- [resvg](https://github.com/linebender/resvg) svg 库。
- [hex](https://github.com/KokaKiwi/rust-hex)
- [rand](https://github.com/rust-random/rand) 随机数生成库。
- [bigdecimal-rs](https://github.com/akubera/bigdecimal-rs) 大十进制数库。
- [rayon](https://github.com/rayon-rs/rayon) 数据并行处理库。
- [rmcp](https://github.com/modelcontextprotocol/rust-sdk) MCP 开发库。
- [qrcode](https://github.com/kennytm/qrcode-rust) 生成二维码库。
- [bardecoder](https://github.com/piderman314/bardecoder) 二维码识别库。
- [datafusion](https://github.com/apache/datafusion) 用 SQL 处理 CSV、JSON、Parquet、Avro、Arrow 等文件的库，可自定义文件格式做扩展。
- [calamine](https://github.com/tafia/calamine) 纯 Rust 实现 Excel/OpenDocument 库。
- [lopdf](https://github.com/J-F-Liu/lopdf) PDF 库。
- [pdf-rs](https://github.com/pdf-rs/pdf) PDF 库。
- [windows-service-rs](https://github.com/mullvad/windows-service-rs) Windows 服务开发库。
- [fast-socks5](https://github.com/dizda/fast-socks5) socks 协议实现库。
- [rlt](https://github.com/wfxr/rlt) 多种协议的压力测试工具开发库。
- [clap](https://github.com/clap-rs/clap) 命令行命令开发库。
- [rxRust](https://github.com/rxRust/rxRust) rx
- [ritual](https://github.com/rust-qt/ritual) 封装一些 C++ 库成 rust 库，主要封装 Qt。

### UI 库

- [iced](https://github.com/iced-rs/iced)
- [egui](https://github.com/emilk/egui)
- [Relm4](https://github.com/Relm4/Relm4)
- [kas](https://github.com/kas-gui/kas)
- [druid](https://github.com/linebender/druid)
- [orbtk](https://github.com/redox-os/orbtk)
- [freya](https://github.com/marc2332/freya) 依赖 dioxus 做的扩展。
- [gpui](https://www.gpui.rs/) Zed 编辑器团队开发的框架，源码在[zed 仓库](https://github.com/zed-industries/zed)里。
- [gpui-component](https://github.com/longbridge/gpui-component) 基于 GPUI 的控件库。
- [bevy](https://github.com/bevyengine/bevy) 数据驱动的游戏引擎。
- [tauri](https://github.com/tauri-apps/tauri) 打包 web 成 移动app 或者 桌面软件的框架。
- [tiny-skia](https://github.com/linebender/tiny-skia) skia 子集，只使用 CPU ，性能差，兼容好。

### web 开发框架和库

- [actix-web](https://github.com/actix/actix-web) 基于 actix 的 web 框架，扩展库 [actix-extras](https://github.com/actix/actix-extras)
- [tuono](https://github.com/tuono-labs/tuono) 用 rust 实现了 NextJs 的框架，只能使用 pages 模式，目录在 routes 目录下，好处是后端代码由 TS 换成了 rust 这样比较容易分辨前后端代码，NextJs 前后端代码都是 TS。
- [axum](https://github.com/tokio-rs/axum) tokio 团队的 web 框架。
- [yew](https://github.com/yewstack/yew) rust 写前端页面，亮点是生成 WASM ，缺点是设计比较早，虽然在仿 react ，但没 react 简洁。
- [leptos](https://github.com/leptos-rs/leptos) rust 写前端页面，代码是类 react 的 jsx-like 风格。
- [sycamore](https://github.com/sycamore-rs/sycamore) rust 写前端页面，亮点是生成 WASM，类 react 风格。
- [tower](https://github.com/tower-rs) web 开发库集合。

### 数据库

- [toasty](https://github.com/tokio-rs/toasty) tokio 开发组开发的异步 ORM。
- [sqlx](https://github.com/launchbadge/sqlx) 纯 rust 的 SQL 生成和客户端库。
- [sea-orm](https://github.com/SeaQL/sea-orm) 整合 sqlx 等库，适配 actix、axum 等多个框架，功能比较全，迁移、DbFirst、CodeFirst 不合理，生成代码和自定义代码没有分离。
- [diesel](https://github.com/diesel-rs/diesel) 多种数据库 ORM，使用了 C 库安装会麻烦点，性能会好点，迁移、DbFirst、CodeFirst 配合比较合理。
- [kosame](https://github.com/pikaju/kosame) 类 Prisma 的 ORM。
- [r2d2](https://github.com/sfackler/r2d2) 数据库链接池库。
- [turso](https://github.com/tursodatabase/turso) 可内嵌的 rust 实现的 sqlite 还扩展了一些功能。
- [rusqlite](https://github.com/rusqlite/rusqlite) 打包 SQLite 给 rust 使用。
- [rust-postgres](https://github.com/sfackler/rust-postgres) 多个 postgres 库集合（postgres、tokio-postgres 等）
- [PoloDB](https://github.com/PoloDB/PoloDB) 可内嵌的文档数据库。
- [native_db](https://github.com/vincent-herlemont/native_db) 可内嵌的关系型数据库，不支持 SQL 语言，只能靠 API 操作。
- [redb](https://github.com/cberner/redb) 可内嵌的键值对数据库。
- [tantivy](https://github.com/quickwit-oss/tantivy) 可内嵌的全文搜索库。

### 底层扩展

- [PyO3](https://github.com/PyO3/pyo3) 开发 Python 库。
- [iced](https://github.com/icedland/iced) x86 的汇编器、反汇编器等功能的库，支持多种语言。
- [probe-rs](https://github.com/probe-rs/probe-rs) ARM、RISC-V 调试工具开发库。
- [rtic(Real-Time Interrupt-driven Concurrency)](https://github.com/rtic-rs/rtic) ARM Cortex-M 系列 MCU 的实时中断驱动协程框架。 
- [ch32-rs](https://github.com/ch32-rs/ch32-rs) 第三方 WCH 沁恒 MCU 的 rust 开发包。
- [esp-rs](https://github.com/esp-rs) 第三方 ESP rust 开发包。
- [stm32-rs](https://github.com/stm32-rs) 第三方 STM32 rust 开发包。
- [app-template](https://github.com/knurling-rs/app-template) 一个嵌入式项目模板。
- [cargo-xwin](https://github.com/rust-cross/cargo-xwin) Linux、MacOs 下交叉编译 Windows 的编译工具。
- [cargo-wix](https://github.com/volks73/cargo-wix) wix 打包应用工具的 cargo 子命令。
- [rust-msi](https://github.com/mdsteele/rust-msi) msi 文件读写库。
- [usb-device](https://github.com/rust-embedded-community/usb-device) USB MCU 驱动开发库。
- [usbd-serial](https://github.com/rust-embedded-community/usbd-serial) USB 上位机 驱动开发库。
- [stm32-usbd](https://github.com/stm32-rs/stm32-usbd) USB STM32 驱动开发库。
- [pc-keyboard](https://github.com/rust-embedded-community/pc-keyboard) PS/2 键值解析。
- [bootloader](https://github.com/rust-osdev/bootloader) x86 引导程序。
- [bootimage](https://github.com/rust-osdev/bootimage) 生成操作系统镜像工具。
- [may](https://github.com/Xudong-Huang/may) 协程库。

## 兼容

### 兼容 Windows 7

rust 为了支持 Windows 7 必须使用 1.75.0 版本。

```bash
# 安装 1.75.0 版本
rustup install 1.75.0

# 切换工具链
rustup default 1.75.0-x86_64-pc-windows-msvc
```
