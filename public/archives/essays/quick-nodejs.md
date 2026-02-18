# nodejs 速查

- [nvm](https://github.com/nvm-sh/nvm)
- [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [farm](https://github.com/farm-fe/farm) rust 开发的兼容 vite 的构建工具。
- [unbuild](https://github.com/unjs/unbuild) 构建工具
- [fis3](https://github.com/fex-team/fis3) 类 gulp 构建工具。

## 常用库

- [thinkjs](https://github.com/thinkjs/thinkjs) 仿 ThinkPHP 的后端框架。

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