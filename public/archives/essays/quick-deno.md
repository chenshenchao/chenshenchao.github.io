# deno 速查

## 常用命令

```bash
# 更新
deno upgrade

# 指定版本
deno upgrade --version 1.0.1
```

```bash
# 运行
deno run my.js
```

```bash
# 编译命令介绍
deno compile -h
# 编译本平台
deno compile --unstable hello.js
# 编译指定平台
deno compile --unstable --target x86_64-unknown-linux-gnu hello.js
# 允许全部权限 -A, --allow-all
deno compile --unstable --allow-all
# 各种权限
# --allow-env=<allow-env>
# --allow-sys=<allow-sys>
# --allow-hrtime
# --allow-net=<allow-net>
# --allow-ffi=<allow-ffi>
# --allow-read=<allow-read>
# --allow-run=<allow-run>  指定用户  --allow-run=www 允许 www 执行
# --allow-write=<allow-write>
```

## 常用库

- [fresh](https://github.com/denoland/fresh) deno 团队开发的 web 框架。
