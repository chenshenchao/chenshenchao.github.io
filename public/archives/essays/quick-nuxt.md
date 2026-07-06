# [草稿]Nuxt 速查

- [官网](https://nuxt.com/)
- [nuxt 源码](https://github.com/nuxt/nuxt)
- [nuxt ui](https://github.com/nuxt/ui) 官方组件库，水合问题最少。

```bash
# 创建项目
npm create nuxt@latest <project-name>

# 安装 nuxt ui 和 tailwindcss
npm install @nuxt/ui tailwindcss
```

## 配置

```ts
export default defineNuxtConfig({
  devtools: { enabled: true }, // 开启开发工具
  devServer: { port: 3000 }, // 开发服务器，默认 3000 端口
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: '/api' // 运行时变量注入。
    }
  },
  routeRules: {
    '/api/**': {
      proxy: 'http://localhost:30000/api/**' // 路由重写 /api 后端接口。
    }
  },
  app: {
    head: {
      title: '站点标题'
    }
  }
})
```