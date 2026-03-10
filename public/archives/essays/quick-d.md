# [草稿] D 速查

- [官网](https://dlang.org/)下载 DMD 安装，并把 bin 目录路径加到 PATH 里。
- [包仓库](https://code.dlang.org/) 可以找包。
- [dmd](https://github.com/dlang/dmd) 源码。
- [ldc](https://github.com/ldc-developers/ldc) 基于 LLVM 的 D 编译器。
- [code-d](https://github.com/Pure-D/code-d) VScode D 语言插件。

## 包管理工具 dub

- [dub 源码库](https://github.com/dlang/dub)

```bash
# -h 可以查看帮助
dub -h

# 初始化项目
dub init

# 构建
dub build

# 运行
dub run

# 添加库 gtk-d
dub add gtk-d
```

## 常用库

- [GtkD](https://gtkd.org/) GTK D 语言封装，需要安装 GTK 运行时。[GitHub 仓库](https://github.com/gtkd-developers/GtkD)
- [hunt-framework](https://github.com/huntlabs/hunt-framework) Web 框架。
- [botan](https://github.com/etcimon/botan) 加密工具库。
- [inilike](https://github.com/FreeSlave/inilike) 类 ini 文件加载库。
- [onyx-log](https://github.com/nykytenko/onyx-log) 多线程日志库。
