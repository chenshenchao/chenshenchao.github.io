# [草稿]Vue 速查

## 常用库

- [pinia](https://pinia.vuejs.org/) 存储管理库
- [vueuse](https://vueuse.org/) vue 扩展库，主要扩展了一些钩子。

## 用法

### provide 和 inject

树形状态管理。在某种程度上让组件耦合了。

```vue
<script setup>
// 父组件提供一个值，之后在其子树上的组件都可以通过 inject 获取这个值。
provide('a', 123);
</script>

<script setup>
// 必须确保在 父组件或者父组件的父组件提供了 a 的情况下，不然报错。
const a = inject('a');
</script>
```