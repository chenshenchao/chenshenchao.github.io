# React 速查

React 被多种框架所使用，官方文档有多种框架的使用教程。

[官方文档](https://react.dev/learn/creating-a-react-app)
[官方文档（旧）](https://github.com/facebook/create-react-app)

```bash
# 1.
# 使用 vite 创建，这样可以使用 编译期 vite 的方法。（网页开发推荐）
npm create vite@latest

# 2.
# 创建 react 裸项目（不推荐，官网已经去掉了这部分的文档）
npx create-react-app my-app
# 或者 npm（不推荐，官网已经去掉了这部分的文档）
npm init react-app my-app
# 指定 ts（不推荐，官网已经去掉了这部分的文档）
npx create-react-app my-app --template typescript

# 3.
# 创建基于 next.js 后端框架 的 react 项目
npx create-next-app@latest

# 4.
# 创建基于 remix 后端框架 的 react 项目
npx create-remix

# 5.
# TODO 被墙没有测试
# 创建基于 gatsby 后端 的 react 项目
# 这个集成了多种 CMS 的风格代码（会拉到 github 有被墙的问题）
npx create-gatsby

# 6.
# 基于 expo 的 react 项目（原生） react native
# android 需要提前打开模拟器或者 连上真机
# ios 没机器
# web 这个直接打不开。
npx create-expo-app
```

## 常用 Hooks

- useState 类似 vue 的 ref
- useMemo 类似 vue 的 computed
- useCallback 类似 compose 的 rememberUpdatedState
- useEffect 类似 compose 的 LaunchedEffect

注：没有类似 vue.component() 这种注册方式，所有组件都要单独 import 使用。

## 常用库

- [react-router](https://github.com/remix-run/react-router) v7及以后 路由库，TS 写的，无需 @types 库。
- [react-router-dom](https://github.com/remix-run/react-router) （旧 v6 以及之前的路由库，TS 的话需要 @types/react-router-dom）。
- [redux](https://github.com/reduxjs/redux) 状态管理库，类似 vue 的 vuex 或 pinia 。
- [ant design](https://github.com/ant-design/ant-design) 阿里的 UI 组件库。