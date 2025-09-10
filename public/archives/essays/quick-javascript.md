# [草稿]JavaScript 速查

## 常用库

- [handsontable](https://github.com/handsontable/handsontable) Excel 编辑器
- [GSAP](https://github.com/greensock/GSAP) 动画库
- [crypto-js](https://github.com/brix/crypto-js) 散列和对称加密库，但是由于标准已经提供了异步的（Crypto Web API）所以只有在兼容旧环境和非异步情况下才使用。
- [jsencrypt](https://github.com/travist/jsencrypt) 纯 JS 的非对称算法 RSA 实现，但是标准已经有异步的（Crypto Web API）所以只有在兼容旧环境和非异步情况下才使用。
- [decimal.js](https://github.com/MikeMcl/decimal.js) 十进制数，有三角函数。
- [bignumber.js](https://github.com/MikeMcl/bignumber.js) 十进制数，decimal.js 精简版，只有四则运算。
- [big.js](https://github.com/MikeMcl/big.js) 十进制数，极简。有 @types/big.js 适配。


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
React 和 Vue 都实现了这个工厂函数来对接各自的后端 VDOM 模板引擎。
