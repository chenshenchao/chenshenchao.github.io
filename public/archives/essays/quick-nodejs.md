# nodejs 速查

- [nvm](https://github.com/nvm-sh/nvm)
- [nvm-windows](https://github.com/coreybutler/nvm-windows) Go 语言开发的 nvm 的 Windows 版本。
- [farm](https://github.com/farm-fe/farm) rust 开发的兼容 vite 的构建工具。
- [unbuild](https://github.com/unjs/unbuild) 构建工具
- [fis3](https://github.com/fex-team/fis3) 类 gulp 构建工具。
- [snowpack](https://github.com/FredKSchott/snowpack) ESM 前端构建工具。
- [rsbuild](https://github.com/web-infra-dev/rsbuild) 基于 Rspack 的构造工具。
- [swc](https://github.com/swc-project/swc) Speedy Web Compiler 支持 TS/JS 的编译。

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
- [zongji](https://github.com/nevill/zongji) MySQL binlog 库。
- [keyv](https://github.com/jaredwray/keyv) 键值对库，适配 valkey、sqlite、MySQL 等。
- [pkg](https://github.com/vercel/pkg) 打包项目成可执行文件。
- [cross-env](https://github.com/kentcdodds/cross-env) package.json scripts 命令环境变量设置。
- [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)
- [dotenv](https://github.com/motdotla/dotenv) .env 文件加载库。
- [svg-captcha](https://github.com/produck/svg-captcha) SVG 验证码生成库。
- [lowdb](https://github.com/typicode/lowdb) 可内嵌的 JSON 数据库。
- [nedb](https://github.com/louischatriot/nedb) 可内嵌的文档数据库。
- [quicktype](https://github.com/glideapps/quicktype) 从 JSON, Schema, 和 GraphQL 生成指定语言的数据结构代码。 
- [ssh2](https://github.com/mscdex/ssh2) SSH2 客户端库。
- [cache-manager](https://github.com/nestjs/cache-manager) 缓存库。
- [node-cache-manager-redis-store](https://github.com/dabroek/node-cache-manager-redis-store) cache-manager 使用 redis 客户端。
- [git-js](https://github.com/steveukx/git-js) git 命令封装。
- [node-glob](https://github.com/isaacs/node-glob) 提供多种 glob 函数库。
- [globby](https://github.com/sindresorhus/globby) 提供 glob 功能函数库。
- [esm](https://github.com/standard-things/esm) ECMAScript 模块加载器。
- [Detox](https://github.com/wix/Detox) 移动端 自动化测试脚本 开发框架。
- [brotli](https://github.com/google/brotli) 谷歌开源的压缩算法。
- [babel](https://github.com/babel/babel)
- [puppeteer](https://github.com/puppeteer/puppeteer) 封装 Chrome、Firefox 的 API，无头浏览器自动化。
- [playwright](https://github.com/microsoft/playwright) 微软开源的封装 Chrome、Firefox、WebKit 的 API，无头浏览器自动化。
- [nodegit](https://github.com/nodegit/nodegit) nodejs 下对 git 命令行封装。
- [winston](https://github.com/winstonjs/winston) 日志库。
- [nanocolors](https://github.com/ai/nanocolors) 命令行颜色样式库。
- [node-archiver](https://github.com/archiverjs/node-archiver) zip 等文档创建的流式库。

### 数据库

- [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) mongodb 原生客户端驱动。

### 网络

- [express](https://github.com/expressjs/express) web 服务器。
- [socket.io](https://github.com/socketio/socket.io) 服务器端以及浏览器端。
- [loopback](https://github.com/strongloop/loopback) web 框架，工具齐全。
- [fastify](https://github.com/fastify/fastify) web 服务器。
- [thinkjs](https://github.com/thinkjs/thinkjs) 仿 ThinkPHP 的后端框架。
- [pug](https://github.com/pugjs/pug) HTML 模板引擎。
- [midway](https://github.com/midwayjs/midway) 类 nestjs 的 web 框架。
- [Gracejs](https://github.com/xiongwilee/Gracejs) 基于 koa2 的框架，设计不太好。
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
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) postcss 转设计稿 px 成 vw 插件。
- [htmlparser2](https://github.com/fb55/htmlparser2) XML/HTML 解析器。
- [strapi](https://github.com/strapi/strapi) CMS 项目。
- [egg](https://github.com/eggjs/egg) web 框架。
- [eggjs static](https://github.com/eggjs/static)
- [grpc-node](https://github.com/grpc/grpc-node)
- [apollo-server](https://github.com/apollographql/apollo-server) GraphQL 服务器框架。

### UI

- [aurelia](https://github.com/aurelia/framework) web 前端 UI 框架，没有虚拟DOM。
- [svelte](https://github.com/sveltejs/svelte) UI 框架。
- [qwik](https://github.com/QwikDev/qwik) web apps 的 UI 开发框架。
- [storybook](https://github.com/storybookjs/storybook) web 与 app 的 UI 组件开发框架。
- [storybookjs react-native](https://github.com/storybookjs/react-native)
- [neutralinojs](https://github.com/neutralinojs/neutralinojs) 桌面应用开发框架。
- [nw.js](https://github.com/nwjs/nw.js) 桌面应用开发框架。
- [open-color](https://github.com/yeun/open-color) 颜色设计样式库，因为 tailwindcss 也有这个库也就没啥意义。
- [webgradients](https://github.com/itmeo/webgradients) 好看的 web 端渐变色样式集合。
- [normalize.css](https://github.com/necolas/normalize.css) 统一不同浏览器的基础样式，主要是清除样式。
- [mui](https://github.com/dcloudio/mui) DCloud 早期的项目，后转向 uniapp。
- [GCanvas](https://github.com/alibaba/GCanvas) 阿里开源为 Weex 和 ReactNative 提供的 2D 渲染库。
- [node-qrcode](https://github.com/soldair/node-qrcode) 二维码生成器。
- [node-canvas](https://github.com/Automattic/node-canvas) 基于 Cairo 的画布。

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

```bash
# 安装后 yarn 命令第一次就会执行初始化。
npm install -g corepack

# 切换版本，这个会切换成最新的 beta 版本。
yarn init -2

# 设置成 正式版本最新。
yarn set version stable
```

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