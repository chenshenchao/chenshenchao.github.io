# npm 速查

npm 是官方标配的包管理器。
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

## 部署

### yum

```bash
# 配置 22.x 的源 
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -

# 安装
yum install -y nodejs
```