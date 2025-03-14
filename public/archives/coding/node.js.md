# Node.js

可以说 Node.js 就是 JS 的发展成现在此等规模的重要根基。大部分的前端项目都依赖 Node.js 作为其开发工具运行环境，各种编译构造打包工具百花齐放。

## 包管理

Node.js 的包管理不像系统软件包管理器（apt、yum等）不仅提供了包的下载，其实也是一套项目管理的规范，正是因为有了这些规范才使得程序员对项目管理的心力省下来用到了软件开发上，使得 Node.js 的项目在迁移后容易部署（想想那些充斥这自定义脚本用于部署的项目，每次迁移都要改动脚本各种的报错调试之后才部署成功）。

### npm

npm 是官方标配的包管理器。

国内因为墙的原因，是要使用镜像的。

```bash
# 直接通过命令指定阿里的镜像源
npm --registry https://registry.npmmirror.com i gsap
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
