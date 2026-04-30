# [草稿] perry 速查

- [perry](https://github.com/PerryTS/perry)

AOT 编译 TS 成原生软件的编译器，现阶段不成熟，还未支持 Windows 。

```bash
# 安装全局工具
npm install -g @perryts/perry

# 检查环境
perry doctor

# 创建项目
perry init your-app

# 编译
perry compile src/main.ts -o myapp

# 运行
perry run .

# 检查类型
perry check src/

# 
winget install LLVM.LLVM
perry setup windows
```

```bash
# 项目引入，通过 scripts 运行 perry 命令。
npm install -D @perryts/perry

# 创建
npx perry init your-app

npx perry setup windows

# 编译
npx perry compile src/main.ts -o myapp && ./myapp
```

## perry/ui

## [perry/react](https://github.com/PerryTS/react)
