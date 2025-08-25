# [草稿]Vue 速查

## Options API 和 Composition API

Options API 以配置的方式来开发组件,这样就有了配置项（option），然后填充各种配置项来开发组件。
这样的好处是功能都是由组件先做好，开发者只要查文档，有这个配置项就是可以做，没有配置项就是做不了，简单直接。
但这样就出现了一个问题，组件越强大，配置项越多，配置项越多，这个组件就越难用，每次用都要查阅文档很久。
当配置项越来越多后，还导致各种项的互斥，用了这个那个就出问题，不能同时使用或者互相影响效果。
像 vue2 这种开发的组件是页面而不是开发库的情况属于 Options API 比较好的应用场景了，毕竟别人不会用你的页面组件，自然也不用了解你的配置项。
那个时代图形库采用 Options API 的很多，集大成者可以说是 echarts 了。在使用 echars 的时候就需要查阅组件的配置表，用过的都知道其配置项多得令人头痛，几乎每个组件都有上百的配置项。

Composition API 是新的组合式编程的方式来组织代码。vue3 开始使用，也是这个时期新出来的图形界面库或者框架的设计理念。就是为了解决 Options API 这种配置参数越来越多的问题，其核心思想就是，复制功能都是由简单功能组合起来的，那么只需要提供重要的几个核心功能，然后组合起来就能变成复杂功能，那么怎么才能方便组合才是关键。所以基于 Composition API 的开发代码量会少很多，因为其设计上就是在考虑怎么让组合简便，而大部分的业务代码就是在组合，自然开发出来的代码就少了。不过 vue3 在这方面的提升不大，没有 react 和 Jetpack Compose 的提升大，但也没有 Flutter 的糟糕。原因还是因为大部分开发者用 vue 是写页面的，且 vue2 的 Options API 属于上个时代设计比精简的，相较之下还是不少人习惯 vue2 的 Options API 开发方式。所以 vue 的 Composition API 是紧跟潮流或者说是库开发者在推动的。

## 常用库

- [pinia](https://pinia.vuejs.org/) 存储管理库
- [vueuse](https://vueuse.org/) vue 扩展库，主要扩展了一些钩子。
- [PPTist](https://github.com/pipipi-pikachu/PPTist) vue 的 PPT 库。

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