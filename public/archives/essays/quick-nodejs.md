# nodejs 速查

- [nvm](https://github.com/nvm-sh/nvm)
- [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [farm](https://github.com/farm-fe/farm) rust 开发的兼容 vite 的构建工具。
- [unbuild](https://github.com/unjs/unbuild) 构建工具
- [fis3](https://github.com/fex-team/fis3) 类 gulp 构建工具。
- [snowpack](https://github.com/FredKSchott/snowpack) ESM 前端构建工具。

## nvm

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

## 常用库

- [node-ffi](https://github.com/node-ffi/node-ffi)
- [oxc](https://github.com/oxc-project/oxc) rust 开发的一个高性能库，有 JS/TS 解释器、压缩等。
- [mysql](https://github.com/mysqljs/mysql) 纯 JS MySQL 客户端。
- [node-mysql2](https://github.com/sidorares/node-mysql2) MySQL 客户端。
- [pkg](https://github.com/vercel/pkg) 打包项目成可执行文件。
- [cross-env](https://github.com/kentcdodds/cross-env) package.json scripts 命令环境变量设置。
- [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)
- [dotenv](https://github.com/motdotla/dotenv) .env 文件加载库。
- [svg-captcha](https://github.com/produck/svg-captcha) SVG 验证码生成库。
- [lowdb](https://github.com/typicode/lowdb) 可内嵌的 JSON 数据库。
- [nedb](https://github.com/louischatriot/nedb) 可内嵌的文档数据库。

### Web

- [loopback](https://github.com/strongloop/loopback) web 框架，工具齐全。
- [fastify](https://github.com/fastify/fastify) web 服务器。
- [Gracejs](https://github.com/xiongwilee/Gracejs) 基于 koa2 的框架，设计不太好。
- [thinkjs](https://github.com/thinkjs/thinkjs) 仿 ThinkPHP 的后端框架。
- [pug](https://github.com/pugjs/pug) HTML 模板引擎。
- [koa](https://github.com/koajs/koa)
- [koajs bodyparser](https://github.com/koajs/bodyparser)
- [koajs router](https://github.com/koajs/router)
- [koa-router](https://github.com/ZijianHe/koa-router) 第三方库，已经停止维护。
- [koajs static](https://github.com/koajs/static)
- [koajs compress](https://github.com/koajs/compress)
- [koajs static-cache](https://github.com/koajs/static-cache)
- [koa-websocket](https://github.com/kudos/koa-websocket)
- [pomelo](https://github.com/NetEase/pomelo) 游戏服务器框架。
- [pinus](https://github.com/node-pinus/pinus) 基于 pomelo 的游戏服务器框架。
- [dart-sass](https://github.com/sass/dart-sass)
- [EvaEngine.js](https://github.com/EvaEngine/EvaEngine.js) 微服务框架。
- [jss](https://github.com/cssinjs/jss) css in js
- [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) 图标字库生成 gulp 插件。
- [falcor](https://github.com/Netflix/falcor) 用于高效提供数据的前后端工具库，支持 express web 框架。

### UI

- [storybook](https://github.com/storybookjs/storybook) web 与 app 的 UI 组件开发框架。
- [storybookjs react-native](https://github.com/storybookjs/react-native)
- [neutralinojs](https://github.com/neutralinojs/neutralinojs) 桌面应用开发框架。
- [nw.js](https://github.com/nwjs/nw.js) 桌面应用开发框架。
- [open-color](https://github.com/yeun/open-color) 颜色设计样式库，因为 tailwindcss 也有这个库也就没啥意义。
- [webgradients](https://github.com/itmeo/webgradients) 好看的 web 端渐变色样式集合。

## 包管理器

### npm

npm 是官方标配的包管理器。
因为 npm 有着各种缺陷，所以后来出现了各种替代品。
不过每隔一段时间这些替代品的功能又可能被 npm 吸纳而失去优势。
国内因为墙的原因，是要使用镜像的。

```bash
# 没有 package-lock.json 的项目，安装依赖包
npm i

# 带有 package-lock.json 的项目，安装依赖包
npm ci 

# 直接通过命令指定阿里的镜像源
npm --registry https://registry.npmmirror.com i gsap

# 登录
npm login

# 发布
npm publish
```

```bash
# 当出现兼容问题时，可以强制安装。
npm install --legacy-peer-deps
# 或
npm install --force

# ci 也可以用这些参数。
npm ci --legacy-peer-deps 

# 审核 next 的依赖。
# 如果用了国内镜像要改原仓库源，国内镜像是不完整的，没有这个功能。
npm audit --registry=https://registry.npmjs.org/ -scope next
```

项目目录下 .npmrc 可配置包管理。

```ini
# 原 npmjs.org 地址
# registry = https://registry.npmjs.org

# 阿里镜像。
registry=https://registry.npmmirror.com
```

因为国内墙的原因，有些包需要指定特殊的参数来指定镜像。
镜像可能会随时改动，所以如果链接不能用了，要再自己找找新的。

```bash
# 指定 chromedriver 二进制资源。
npm i chromedriver --chromedriver_cdnurl=https://..

# 指定 electron 二进制资源。
npm i -D electron --electron_mirror=https://..
```

### yarn

最早解决 npm 的很多问题的工具，不过后来功能主键被 npm 吸纳，目前失去了优势。 

### [berry](https://github.com/yarnpkg/berry)

yarn 的下一代。

### pnpm

- [GitHub 源码仓库](https://github.com/pnpm/pnpm)

相对于 npm 还是有一些优势，主要解决影子依赖问题。

```bash
```

## 部署

### yum

```bash
# 配置 22.x 的源 
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -

# 安装
yum install -y nodejs
```

## 杂项

### gyp

早年的一些二进制库是通过 gyp 构建的，Windows 构建比较麻烦，留存一些相关的信息。

```bat
@rem 安装 node-gyp 和 windows-build-tools 构建工具
@rem 安装可能被墙，因为依赖很繁杂，安装的时候会到处下载而出现形形色色外网链接。
npm i -g node-gyp
npm i -g --production windows-build-tools
@rem 执行构建。
node-gyp configure build
```

可以使用 build.gyp 来构建 C 扩展，示例：

```json
{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "path/to/src.cc" ]
    }
  ]
}
```