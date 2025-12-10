# [草稿] Zig 速查

- [官网](https://ziglang.org/)

zig 的命令行工具除了编译功能外也包含包管理功能。

```bash
# 把当前目录初始化为 zig 项目
zig init

# 构建
zig build

# 构建并运行
zig build run

# 执行测试
zig build test

# 执行 index.zig 里的测试
zig test index.zig
```