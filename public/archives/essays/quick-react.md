# React 速查

React 被多种框架所使用，官方文档有多种框架的使用教程。

[官方文档](https://react.dev/learn/creating-a-react-app)
[官方文档（旧）](https://github.com/facebook/create-react-app)

注：没有类似 vue.component() 这种注册方式，所有组件都要单独 import 使用。

```bash
# 1.
# 使用 vite 创建，这样可以使用 编译期 vite 的方法。（网页开发推荐）
# 而且可以使用 vite 的编译功能，做到自动路由生成。
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

## 常用组件

- [StrictMode 严格模式](#1)
- [Suspense 悬念](#2)

### StrictMode 严格模式

使用严格模式后，所有组件在调试模式都会比正常模式多执行一次。
这样做的目的是确保你的组件是幂等的，即便多调用一次也不会出错。

### Suspense 悬念

这个组件提供了异步加载界面支持。

注：Vue3 也打算支持这个组件，有个同名组件，但是一直在实验性阶段。

## 常用 Hooks

### useState

useState 类似 vue 的 ref 和 reactive ，用来保存状态。

### useMemo

useMemo 类似 vue 的 computed 用来缓存结果。

### useEffect

useEffect 类似 compose 的 LaunchedEffect 用来执行有副作用的操作。

### useCallback

useCallback 类似 compose 的 rememberUpdatedState，用来监听变量改变重新闭包函数。

### useActionState

useActionState 用来给有 action 或者 formAction 提供一个带事务的机制。

```tsx
import { useActionState } from "react";

function StatefulForm({}) {
  const [state, formAction] = useActionState(
    async (previousState, formData) => {
      return previousState + 1;
    },
    0 // 初始化状态
  );
  return (
    <form>
      {state}
      <button formAction={formAction}>+1</button>
    </form>
  );
}
```

## 常用库

- [react-router](https://github.com/remix-run/react-router) v7 及以后 路由库，TS 写的，无需 @types 库。
- [react-router-dom](https://github.com/remix-run/react-router) （旧 v6 以及之前的路由库，TS 的话需要 @types/react-router-dom）。
- [redux](https://github.com/reduxjs/redux) 状态管理库，类似 vue 的 vuex 或 pinia 。
- [ant design](https://github.com/ant-design/ant-design) 阿里的 UI 组件库。
- [loadable-components](https://github.com/gregberge/loadable-components) React 有自带的 lazy 函数，这个组件是在 React 没提供时期做的，后来 React 自带了，但是这个库的功能更多。

### react-router

```jsx
import { useNavigate, Outlet } from "react-router";

// Outlet 用来占位，当一个组件有 children 时，切换路由就会改变 Outlet 对应的子组件。
export default function Demo() {
  // useNavigate 用来获取用于触发跳转的函数 navigate
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      />
      <Outlet />
    </>
  );
}
```
