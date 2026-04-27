# [草稿]ice.js 飞冰 速查

- [ice](https://github.com/alibaba/ice)

这是一个 阿里系 开源的 React 技术栈，支持 web 和 小程序平台。此项目处于半死不活状态，很多功能都有 BUG。
这个项目已经到了 v3 版本了，在使用的时候要注意，文档有差异，官方无明显标注版本号。

```bash
# 当前目录初始化。
npm create ice 
# 创建 ice-app 目录并初始化。
npm create ice ice-app
# 创建 ice-app 目录，指定生成最小的框架，只 web 。
npm create ice ice-app --template @ice/lite-scaffold
# 创建 ice-app 目录，指定生成有小程序相关的框架。
npm create ice ice-app --template @ice/miniapp-scaffold
```

## 插件

icejs 由于跨平台不能直接使用 react 的一些库，所以提供了一些插件，引入插件后需要配置 ice.config.mts 启用插件。

```bash
# 状态管理，需要装插件。
npm i -D @ice/plugin-store

# HTTP 客户端，需要特殊的插件。
npm i -D @ice/plugin-request

# 权限管理
npm i -D @ice/plugin-auth

# 使用原子CSS
npm i -D @ice/plugin-unocss

# 阿里 fusion 组件库（不知道适配个桌面 UI 库干嘛？），插件。https://github.com/alibaba-fusion/next
npm i -D @ice/plugin-fusion

# 阿里 antd 组件库（不知道适配个桌面 UI 库干嘛？），插件
npm i -D @ice/plugin-antd
```

## 路由与页面

小程序要单独加多个 miniappManifest 配置，且要和约定的目录结构一致，这就很吊诡，这么强约定，都使用插件了，怎么不自动生成？
小程序端不支持 layout.tsx ，这就很吊柜，都用插件了，不会自动合并代码吗？
小程序端不支持 动态路由，这点没办法，小程序是静态前端，没办法做这个。
使用 ice 模块导出的 history 这个就很吊诡，history 是前端的固有对象名，使用这个重名设计就很有问题。
使用 ice 模块导出的 useNavigate 导航路由，这个属于比较合理的，建议使用这个，而不是使用 history 这种。
使用 ice 模块导出的 useLocation、useSearchParams、useParams 获取路由信息。

使用 ice 模块导出的 useData 操作页面数据，这个是为了兼容小程序 data 的无奈设计。
使用 ice 模块导出的 definePageConfig 做页面配置，小程序和 web 的配置有所区别。


## 常见问题

当适配 npm workspaces 后，icejs 还是会有部分使用自己目录下的 node_modules 目录。
如果在当前目录直接执行 npm run start 是不行的，会报资源的错误，大概率路径对不上。
必须在根目录 npm -w ice-app run start 才行，且会有缓存在 ice-app/node_modules/.cache 目录下。
