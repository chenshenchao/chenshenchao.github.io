# NextJs 速查

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
