# [草稿] D 速查

[官网](https://dlang.org/)下载 DMD 安装，并把 bin 目录路径加到 PATH 里。
[包仓库](https://code.dlang.org/) 可以找包。

## 包管理工具 dub

- [GitHub 源码仓库](https://github.com/dlang/dub)

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
