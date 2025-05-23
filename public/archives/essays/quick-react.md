# React 速查

React 被多种框架所使用，官方文档有多种框架的使用教程。

[官方文档](https://react.dev/learn/creating-a-react-app)
[官方文档（旧）](https://github.com/facebook/create-react-app)

注：没有类似 vue.component() 这种注册方式，所有组件都要单独 import 使用。

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
