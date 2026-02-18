# [草稿]ErLang 速查

这是爱立信开发的一个主打并发的语言。

- [官网](https://erlang.org) 
- [otp 源码](https://github.com/erlang/otp)

下载安装包安装，之后需要把安装目录下的 bin 路径添加到环境变量 PATH 里。

```bat
@rem 编译
erlc hello.erl

@rem 执行
erl -noshell -s hello start -s init stop
```

## 常用库

- [cowboy](https://github.com/ninenines/cowboy) web 服务器。
- [bitcask](https://github.com/basho/bitcask) 键值对数据库。

## 包管理与构造

### [Rebar3](https://github.com/erlang/rebar3)

[官网](https://www.rebar3.org) 下载文件 rebar3 放到 erlang 的 bin 目录。
新建 rebar3.cmd 文件，内容如下（代码来自 rebar3 官网）。

```cmd
@echo off
setlocal
set rebarscript=%~f0
escript.exe "%rebarscript:.cmd=%" %*
```
