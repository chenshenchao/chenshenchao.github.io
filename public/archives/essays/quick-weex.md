# Weex 速查

- [官网](https://weexapp.com/)
- [GitHub仓库](https://github.com/alibaba/weex)

阿里巴巴开源的跨平台移动端绑定框架，目前只支持 Vue（2有相对成熟，3的还有不稳定） 和 Rax（React 语法80%支持） 这两种前端框架。

```bat
@rem 安装命令行工具
npm i -g weex-toolkit 

@rem 查看信息
weex -v
@rem 查看信息，首次会拉取依赖库，因为墙，加上国内镜像源。
weex -v --registry https://registry.npmmirror.com

@rem 创建项目
weex create my-project

@rem 添加平台支持
weex platform add ios
weex platform add android

@rem 运行指定平台
weex run ios
weex run android
weex run web

@rem 调试
weex debug
```