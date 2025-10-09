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

useState 类似 vue 的 ref 和 reactive ，用来保存简单的状态。

```tsx
const [name, setName] = useState<string>("");

// 使用值。
console.log("name", name);

// 传递新值改掉旧值。
setName("name aaaa");
```

### useReducer

用 action 来管理状态，可以把逻辑放到 reducer 里面。

```tsx
// 比 useState 多了个复杂逻辑的 setter 定义。
const reducer = (state, action) => {
  switch (action.type) {
    case "A":
      return { a: state.a + 1 };
    case "B":
      return { a: state.a - 1 };
    default:
      return { a: 0 };
  }
};

// 这里的使用和 useState 基本相同。区别的 dispatch 和 setter。
const [state, dispatch] = useReducer(reducer, { a: 0 });

// 是传递 action 来修改值。而不是直接传递新值改旧值。
dispatch({ type: "A" });
```

### useMemo

useMemo 类似 vue 的 computed 用来缓存结果。

```tsx
default export function DemoPage() {
  const [state, setState] = useState(false);
  const rState = useMemo(() => {
    return !state
  }, [state]);

  return (
    <>
    <div>{state}</div>
    <div>{rState}</div>
    </>
  )
}
```

### useRef 和 forwardRef

useRef 区别于 useState 在于 useRef 修改 current 的值不会触发组件重绘。所以很合适用来获取 DOM 对象和存储不引发界面重绘的值。

```tsx
const e = useRef<HTMLDivElement>(null);

return <div ref={e}></div>;
```

forwardRef 则用于定义子组件向父组件暴露 ref

```tsx
// 用 forwardRef 包装函数组件，使其能接收 ref
const ChildComponent = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// 父组件获取的 ref 是 子组件的 input
function ParentComponent() {
  const inputRef = useRef(null);

  return <ChildComponent ref={inputRef} placeholder="请输入..." />;
}
```

### useEffect

useEffect 类似 compose 的 LaunchedEffect 用来执行有副作用的操作。如果返回值就类似 DisposableEffect 的 dispose。

```tsx
function DemoPage() {
  useEffect(() => {}, []); // 没有关联的状态，也最好写个空数组。
}
```

### useCallback

useCallback 类似 compose 的 rememberUpdatedState，用来监听变量改变重新闭包函数。

```tsx
import { useCallback } from "react";
function DemoPage() {
  const doSome = useCallback(() => {}, []);
}
```

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

### createContext 和 useContext 、*Context.Provider、*Context.Consumer

这个类似 Vue 的 Provider 和 Inject ，Jetpack Compose 的 CompositionLocal 和 CompositionLocalProvider， WPF 的 依赖属性。
提供一种树状状态管理，优点是跨越多个局部作用域共享数据，缺点也是因为局部。
对于框架开发有用，可以防止污染全局。对于应用开发属于是自己绊倒自己，不如全局的状态管理。
同时也使得 提供上下文的组件 和 获取数据的组件 耦合，约束了组件的使用方式。

```tsx
// 上下文
export const YourContext = createContext('default value');

const [a, setA] = useState('new value a');
const reducer = (state, action) => {
  //详见上。
};
const [a, dispatchA] = useReducer(reducer, 'new value a');

// 提供者，可以是 useState useReduce 或者 字面量。
<YourContext.Provider value={{a, setA}}>
  <YourComponent/>
</YourContext.Provider>

// 获取值 1，这种比较简便，推荐。
function YourComponent() {
  const { a， setA } = useContext(YourContext); // 获取值，但是必须确保被有提供的上下文组件包在子作用域里。
  // a, 和 setA 的用法如 useState.
}

// 获取值 2，这种会让 html 多一层。不好看，尤其多个上下文会多出好几层。
<YourContext.Consumer>
  {({a, setA}) => (
    <div>{{a}}</div>
  )}
</YourContext.Consumer>
```

### useId

解决 SSR 场景下服务端和客户端 ID 不一致问题。

## 常用库与项目

- [radix-ui primitives](https://github.com/radix-ui/primitives) 无样式 UI 组件库，大部分桌面组件，有少部分移动端组件。
- [radix-ui themes](https://github.com/radix-ui/themes) 有样式的 radix-ui 组件库，大部分桌面组件，有少部分移动端组件。
- [radix-ui icons](https://github.com/radix-ui/icons) radix-ui 图标库。
- [shadcn-ui](https://github.com/shadcn-ui/ui) 基于 radix-ui 做的 UI 组件库和开发工具，风格简约，方便定制，适合做官网。
- [tamagui](https://github.com/tamagui/tamagui) 像素风格 UI 组件库。
- [chakra-ui](https://github.com/chakra-ui/chakra-ui) UI 组件库。
- [NativeBase](https://github.com/GeekyAnts/NativeBase) 黑白复古风格 UI 组件库。
- [React Spectrum](https://github.com/adobe/react-spectrum) Adobe，UI 组件库。
- [primereact](https://github.com/primefaces/primereact) UI 组件库。
- [evergreen](https://github.com/segmentio/evergreen) UI 组件库。
- [tdesign-react](https://github.com/Tencent/tdesign-react) 腾讯桌面 UI 库,Table 等组件问题多，不推荐。
- [tdesign-mobile-react](https://github.com/Tencent/tdesign-mobile-react) 腾讯移动 UI 库。
- [react-vant](https://github.com/3lang3/react-vant) 移动端 UI 组件库。(vue 的 vant 的第三方开发的 react 版)
- [nutui-react](https://github.com/jdf2e/nutui-react) 移动端 UI 组件库。(京东 vue 的 nutui 的京东零售开发的 react 版)
- [ant-design-mobile](https://github.com/ant-design/ant-design-mobile) 阿里，移动端 UI 组件库。
- [UI Kitten](https://github.com/akveo/react-native-ui-kitten) React native 的 UI 组件库。
- [react-slick](https://github.com/akiran/react-slick) 轮播
- [react-virtualized](https://github.com/bvaughn/react-virtualized) 虚拟滚动
- [react-router](https://github.com/remix-run/react-router) v7 及以后 路由库，TS 写的，无需 @types 库。
- [react-router-dom](https://github.com/remix-run/react-router) （旧 v6 以及之前的路由库，TS 的话需要 @types/react-router-dom）。
- [loadable-components](https://github.com/gregberge/loadable-components) React 有自带的 lazy 函数，这个组件是在 React 没提供时期做的，后来 React 自带了，但是这个库的功能更多。
- [ahook](https://github.com/alibaba/hooks) 扩展钩子(Hook)库。
- [react-use](https://github.com/streamich/react-use) 扩展钩子(Hook)库。
- [redux](https://github.com/reduxjs/redux) 状态管理，厚重稳定。类似 vue 的 vuex 或 pinia 。
- [redux-persist](https://github.com/rt2zz/redux-persist) redux 持久化扩展，多年不更新，对新 redux 有点小问题。
- [zustand](https://github.com/pmndrs/zustand) 状态管理，轻量化。
- [jotai](https://github.com/pmndrs/jotai) 状态管理，原子粒度。
- [tanstack](https://tanstack.com) 包括原[react-query](https://github.com/tanstack/query)扩展到支持多框架多功能的开发库集合。
- [styled-components](https://github.com/styled-components/styled-components) 样式定义组件的库。
- [react-i18next](https://github.com/i18next/react-i18next) 为 React 开发的 i18n 扩展库。
- [Ant Design](https://github.com/ant-design/ant-design) 阿里，桌面 UI 组件库，组件多，很多问题没解决，使用方法旧，不推荐。
- [Ant Design Pro](https://github.com/ant-design/ant-design-pro) 基于 Ant Design 后台项目，可用于二开，不推荐。

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

### shadcn

```bash
# 初始化，可以在已有项目里面做增量，也可以创建新的项目。
npx shadcn@latest init
# 添加组件，每种组件都要通过此命令引入。
npx shadcn@latest add accordion
```

## React Native 原生APP

官网文档使用 expo 。

```bash
# 创建项目
npx create-expo-app@latest
```

### 基于 NextJS 的 React Native

#### [t3-app](https://github.com/t3-oss/create-t3-app) 和 [t3-turbo](https://github.com/t3-oss/create-t3-turbo)

```bash
# 创建 t3 app
npm create t3-app@latest

# 生成 t3 turbo 项目，必须选 pnpm 包管理。
npx create-turbo@latest -e https://github.com/t3-oss/create-t3-turbo
```