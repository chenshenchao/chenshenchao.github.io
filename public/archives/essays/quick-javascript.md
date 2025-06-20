# [草稿]JavaScript 速查

## 常用库

- [handsontable](https://github.com/handsontable/handsontable) Excel 编辑器

## NodeJs

### nvm

[GitHub 仓库](https://github.com/nvm-sh/nvm) 按照 README 安装。

```bat
@rem 列举已经安装的 node 版本
nvm list

@rem 查看当前版本
nvm current

@rem 安装指定版本
nvm install 22.15.0

@rem 切换版本匹配最近的 16 版本
nvm use 16
```


## jsx

JSX 是 js 的扩展语言，在 JS 的基本语法上扩展出可以直接写 XML 的语法。
使用的时候通过 JSX 的编译器前端做语法分析得到中间信息。
通过提供一个 jsxFactory 工厂函数来对接编译器后端。
React 和 Vue 都实现了这个工厂函数来对接各自的后端VDOM模板引擎。
