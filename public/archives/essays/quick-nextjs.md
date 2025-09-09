# NextJs 速查

NextJS 的复杂度在于其并非宣传的那样是 SSR（Server Side Render）而是结合了 CSR（Client Side Render）的混合，也就是术语“水合”。
当用户访问页面，因为使用的是浏览器，会有鼠标或者触摸屏事件，所以是单页面的模式，这个模式是 CSR 渲染的页面。
当爬虫访问页面，因为是直接 HTTP 请求爬取 URL 链接，没有触发鼠标或者触摸屏事件，所以类似多页面模式，这种情况下是 SSR 渲染的页面。
这样就可以做 SEO 又有单页面的流畅。同时却给开发带来了难度，因为写一个页面要同时能生成 SSR 和 CSR 两种渲染，代码就难写。

```bash
# 创建项目
npx create-next-app@latest

## 调试模式
npm run dev
```

## 模式

nextjs 有两种模式：App 和 Pages 模式，推荐使用 App 模式。

- 目录以 app 开始为 app 模式。
- 目录以 pages 开始为 pages 模式。
- 目录以 public 开始是 静态文件。

注：两种模式可以混合使用，但是同个 url pathname 只能取绑定的路径一种，例如：
app/page.tsx 和 pages\index.tsx 会冲突，必须删掉一个。

### app 模式

app 模式比较健壮，目录名代表路径，page.tsx 代表该目录路径的页，就不会出现 pages 模式二义性的问题。
但是路径参数也是体现在目录名上，会出现诡异的目录名（如：[...args]）

- / => app/page.tsx
- /about => app/about/page.tsx
- /some => app/some/page.tsx

#### 布局 layout.tsx

布局是一层层嵌套的，而非替代：
app/layout.tsx 会作用于所有页面，app/about/layout.tsx 被当作顶层布局的 children 被加载。

##### 多布局

可以如下，把目录名加括号，这样就可以提供不同的布局，但是要注意这是水合后不能路径冲突。

- app/(main)/layout.tsx
- / => app/(main)/page.tsx
- app/(other)/layout.tsx
- /a => app/(other)/a/page.tsx

### pages 模式

pages 类似类似 PHP ，文件名 index.tsx 代表目录 其他的是目录名和文件名。

- / => pages/index.tsx
- /about => pages/about.tsx 或者 pages/about/index.tsx
- /some/thing => pages/some/thing.tsx 或者 pages/some/thing/index.tsx

## API 路由

由于 NextJs 主打的 SSR 做 SEO 的，所以自带了后端，有一套简易的 API 开发方式。

- pages 模式必须在 pages/api 目录下。使用 NextApiRequest, NextApiResponse 对象。
- app 模式必须在 route.js 或 route.ts 文件里且 route 文件与 page.js 和 page.ts 互斥,函数名必须是 GET、POST、PUT 这种。使用标准 Request 和 Response 或扩展后的 NextRequest 和 NextResponse 对象。

## 组件

所有客户端组件（文件顶部 "use client";）的都不能是异步的。
只有服务端组件（文件顶部 "use server"; 或者不写）才能是异步组件。

## 杂项

```html
<!-- 这样可以抑制水合警告，不建议使用，这样只是把问题藏起来。 -->
<html lang="en" suppressHydrationWarning></html>
```
