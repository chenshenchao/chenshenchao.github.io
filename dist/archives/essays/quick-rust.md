# rust 速查

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

### 配置镜像

~/.cargo 目录下，可以创建 config.toml（旧版叫 config 没有.toml后缀） 文件配置镜像。
这个 config（旧版叫 config 没有.toml后缀） 文件不一定有，没有自己创建。

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

## 常用库

### 数据库

- [sqlx](https://github.com/launchbadge/sqlx)
- [diesel](https://github.com/diesel-rs/diesel)
- [rusqlite](https://github.com/rusqlite/rusqlite)


## 兼容

### 兼容 Windows 7

rust 为了支持 Windows 7 必须使用 1.75.0 版本。

```bash
# 安装 1.75.0 版本
rustup install 1.75.0

# 切换工具链
rustup default 1.75.0-x86_64-pc-windows-msvc
```
