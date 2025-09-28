# [草稿]JavaScript 速查

## 常用库

- [moment](https://github.com/moment/moment) 日期库。
- [luxon](https://github.com/moment/luxon) 日期库。
- [dayjs](https://github.com/iamkun/dayjs) 日期库。
- [lodash](https://github.com/lodash/lodash) 基础类型扩展工具库。
- [ramda](https://github.com/ramda/ramda) 类 lodash 工具库。
- [handsontable](https://github.com/handsontable/handsontable) Excel 编辑器
- [GSAP](https://github.com/greensock/GSAP) 动画库
- [crypto-js](https://github.com/brix/crypto-js) 散列和对称加密库，但是由于标准已经提供了异步的（Crypto Web API）所以只有在兼容旧环境和非异步情况下才使用。
- [jsencrypt](https://github.com/travist/jsencrypt) 纯 JS 的非对称算法 RSA 实现，但是标准已经有异步的（Crypto Web API）所以只有在兼容旧环境和非异步情况下才使用。
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) Node 的 Bcrypt HASH 实现。
- [decimal.js](https://github.com/MikeMcl/decimal.js) 十进制数，有三角函数。
- [bignumber.js](https://github.com/MikeMcl/bignumber.js) 十进制数，decimal.js 精简版，只有四则运算。
- [big.js](https://github.com/MikeMcl/big.js) 十进制数，极简。有 @types/big.js 适配。
- [clsx](https://github.com/lukeed/clsx) HTML 类名设计库，可以结合 tailwindcss 使用管理 react 的 className。
- [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) jwt 库。
- [i18next](https://github.com/i18next/i18next) i18n 扩展库。
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) i18next 浏览器端检查语言类型扩展。
- [i18next-resources-to-backend](https://github.com/i18next/i18next-resources-to-backend) i18next 加载 JSON 资源。

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
