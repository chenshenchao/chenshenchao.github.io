# JavaScript 速查

## 常用库

- [NativeScript](https://github.com/NativeScript/NativeScript) 生成原生APP的工具。
- [web-vitals](https://github.com/GoogleChrome/web-vitals) 谷歌推出用来测量网站体验的库。
- [moment](https://github.com/moment/moment) 日期库。
- [luxon](https://github.com/moment/luxon) 日期库。
- [dayjs](https://github.com/iamkun/dayjs) 日期库。
- [timeago.js](https://github.com/hustcc/timeago.js) 2kb 日期库。
- [lodash](https://github.com/lodash/lodash) 基础类型扩展工具库。
- [ramda](https://github.com/ramda/ramda) 类 lodash 工具库。
- [x-spreadsheet](https://github.com/myliang/x-spreadsheet) 类似 Office Excel 的 canvas 编辑器，换 TS 开发了 wolf-table。
- [handsontable](https://github.com/handsontable/handsontable) Excel 编辑器
- [sheetjs](https://github.com/SheetJS/sheetjs) excel 操作库，免费版本功能有限，Pro 版本收费。
- [ace](https://github.com/ajaxorg/ace) 代码编辑器。
- [GSAP](https://github.com/greensock/GSAP) 动画库
- [crypto-js](https://github.com/brix/crypto-js) 散列和对称加密库，但是由于标准已经提供了异步的（Crypto Web API）所以只有在兼容旧环境和非异步情况下才使用。
- [jsencrypt](https://github.com/travist/jsencrypt) 纯 JS 的非对称算法 RSA 实现，但是标准已经有异步的（Crypto Web API）所以只有在兼容旧环境和非异步情况下才使用。
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) Node 的 Bcrypt HASH 实现。
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) 纯 JS 实现的 Bcrypt HASH 实现，可在浏览器端使用。（一般也不在浏览器端散列密码。）
- [argon2](https://github.com/ranisalt/node-argon2) Node 的 密码散列实现。
- [decimal.js](https://github.com/MikeMcl/decimal.js) 十进制数，有三角函数。
- [bignumber.js](https://github.com/MikeMcl/bignumber.js) 十进制数，decimal.js 精简版，只有四则运算。
- [big.js](https://github.com/MikeMcl/big.js) 十进制数，极简。有 @types/big.js 适配。
- [clsx](https://github.com/lukeed/clsx) HTML 类名设计库，可以结合 tailwindcss 使用管理 react 的 className。
- [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) jwt 库。
- [i18next](https://github.com/i18next/i18next) i18n 扩展库。
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) i18next 浏览器端检查语言类型扩展。
- [i18next-resources-to-backend](https://github.com/i18next/i18next-resources-to-backend) i18next 加载 JSON 资源。
- [globals](https://github.com/sindresorhus/globals) 统一全局总变量的名字（浏览器 window, NodeJS global），一般 ESlint 配置文件用到。
- [tesseract.js](https://github.com/naptha/tesseract.js) 纯 JS 实现 OCR 库。
- [sharp](https://github.com/lovell/sharp) 封装 libvips 的 NodeJS 的 C 扩展 图像处理库。
- [openlayers](https://github.com/openlayers/openlayers) 瓦片层库，可以用于地图瓦片拼接绘制。（天地图有支持的API）
- [turn.js](https://github.com/blasten/turn.js) 基于 jQuery 的书刊翻页库。
- [jszip](https://github.com/Stuk/jszip) zip 库。
- [zip.js](https://github.com/gildas-lormeau/zip.js) zip 库。
- [zlib.js](https://github.com/imaya/zlib.js) zlib 库。
- [protobuf.js](https://github.com/protobufjs/protobuf.js) protobuf 实现。
- [transformers.js](https://github.com/huggingface/transformers.js) huggingface 开发用于浏览器端运行 transformers 模型的框架。
- [gif.js](https://github.com/jnordberg/gif.js) gif 图片处理库。
- [gifify](https://github.com/vvo/gifify) 视频转 gif 图片库。
- [freezeframe.js](https://github.com/ctrl-freaks/freezeframe.js) 控制 gif 动画播放。
- [vector-drawable-svg](https://github.com/seanghay/vector-drawable-svg) 安卓图标资源（VectorDrawable）转 SVG 库。
- [jsPDF](https://github.com/parallax/jsPDF) PDF 生成库。
- [pdf.js](https://github.com/mozilla/pdf.js) PDF 展示库。
- [simple-virtual-dom](https://github.com/livoras/simple-virtual-dom) 一个虚拟 DOM 实现库。
- [dyo](https://github.com/dyo/dyo) DOM 元素生成库。
- [eva.js](https://github.com/eva-engine/eva.js) 前端简易游戏引擎。
- [matter-js](https://github.com/liabru/matter-js) 2D 刚体物理引擎。
- [Oimo.js](https://github.com/lo-th/Oimo.js) 3D 物理引擎。
- [box2d.js](https://github.com/kripken/box2d.js) box2d 通过 wasm 打包。
- [planck.js](https://github.com/piqnt/planck.js) 2D 物理引擎。
- [asm-js validator](https://github.com/asm-js/validator) asm.js 的参考验证器。
- [MIDI.js](https://github.com/mudcube/MIDI.js)
- [licia](https://github.com/liriliri/licia) 无依赖，自成一体的工具集库（UUID 生成等）。
- [chameleon](https://github.com/didi/chameleon) 跨 web 和多家小程序的 开发框架。
- [astring](https://github.com/davidbonnet/astring) JS 解析成 AST 库。
- [draggable](https://github.com/Shopify/draggable) DOM 元素拖拽库。
- [Sortable](https://github.com/SortableJS/Sortable) DOM 元素拖拽库。
- [dragula](https://github.com/bevacqua/dragula) DOM 元素拖拽库。
- [commander.js](https://github.com/tj/commander.js) 命令行参数处理库。
- [luxbar](https://github.com/balzss/luxbar) 仿 GitHub 响应式导航栏。
- [pickerjs](https://github.com/fengyuanchen/pickerjs) 日期选择器 UI 组件。
- [viewerjs](https://github.com/fengyuanchen/viewerjs) 图片浏览器 UI 组件。
- [cropperjs](https://github.com/fengyuanchen/cropperjs) 图片裁剪器 UI 组件。
- [compressorjs](https://github.com/fengyuanchen/compressorjs) 图片压缩器 UI 组件。
- [cropper](https://github.com/fengyuanchen/cropper) 基于 jQuery 的图片裁剪器 UI 组件。
- [echarts](https://github.com/apache/echarts)
- [echarts-wordcloud](https://github.com/ecomfe/echarts-wordcloud) echarts 组件。
- [echarts-liquidfill](https://github.com/ecomfe/echarts-liquidfill) echarts 组件。
- [joint](https://github.com/clientIO/joint) 图表库。
- [G6](https://github.com/antvis/G6) 图形图表库。
- [d3](https://github.com/d3/d3) 图形图表库，细粒度的API。
- [Chart.js](https://github.com/chartjs/Chart.js) 图形图表库。
- [spritejs](https://github.com/spritejs/spritejs) 精灵组件。
- [size-sensor](https://github.com/hustcc/size-sensor) DOM 元素大小缩放监听库。
- [canvas-nest.js](https://github.com/hustcc/canvas-nest.js) 一个绘制 连线的 背景动画效果。
- [multiscroll.js](https://github.com/alvarotrigo/multiscroll.js) 滚动分屏效果。
- [impress.js](https://github.com/impress/impress.js) 报纸版面切换效果。
- [reveal.js](https://github.com/hakimel/reveal.js) 新手引导这类演示动画的框架。
- [FileSaver.js](https://github.com/eligrey/FileSaver.js) 浏览器文件保存库，有内存限制问题。
- [StreamSaver.js](https://github.com/jimmywarting/StreamSaver.js) 浏览器文件保存库，流式（ReadableStream、WritableStream），解决内存限制问题。
- [nsfwjs](https://github.com/infinitered/nsfwjs) 基于 TensorFlow.js 开发的 NSFW（Not Safe For Work）色情暴力图片检测库。
- [favico.js](https://github.com/ejci/favico.js) 用图片或视频制作 带 badge 的 favico 图标。 
- [jison](https://github.com/zaach/jison) 类 bison 的 JS 库。
- [pinyin](https://github.com/hotoo/pinyin) 中文转拼音。
- [coordtransform](https://github.com/wandergis/coordtransform) 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换。
- [picojs](https://github.com/nenadmarkus/picojs) 人脸识别库。
- [clientjs](https://github.com/jackspirou/clientjs) 获取浏览器指纹等用户信息的库。
- [slick](https://github.com/kenwheeler/slick) 基于 jQuery 的轮播组件库。

### Web

- [riot](https://github.com/riot/riot) web 前端框架。
- [hyperapp](https://github.com/jorgebucaran/hyperapp) 1kb 大小的 web 前端框架。
- [avalon](https://github.com/RubyLouvre/avalon) 前端 MVVM 框架，已经废弃。
- [layui](https://github.com/layui/layui) 类 jQuery 风格的 UI 组件库。
- [lulu](https://github.com/yued-fe/lulu) 原生JS风格的 UI 组件库。
- [move.js](https://github.com/visionmedia/move.js) JS 生成 CSS 动画库。
- [Proton](https://github.com/drawcall/Proton) 粒子动画库。
- [ejs](https://github.com/mde/ejs) 模板引擎
- [template.js](https://github.com/yanhaijing/template.js) 模板引擎
- [art-template](https://github.com/goofychris/art-template) 模板引擎
- [mustache.js](https://github.com/janl/mustache.js) 模板引擎
- [doT](https://github.com/olado/doT) 模板引擎
- [consolidate.js](https://github.com/tj/consolidate.js) 模板引擎整合库。
- [vue-lit](https://github.com/yyx990803/vue-lit) 合并了 @vue/reactivity 和 lit-html 做出来的轻量框架。
- [tabler](https://github.com/tabler/tabler) 基于 Bootstrap 的 UI 库。
- [AdminLTE](https://github.com/ColorlibHQ/AdminLTE) 基于 Bootstrap 的 UI 库。
- [hls.js](https://github.com/video-dev/hls.js) 让只支持MSE(Media Source Extensions，W3C 制定)的浏览器支持 HLS(HTTP Live Streaming，苹果公司推出) 的视频播放。
- [video.js](https://github.com/videojs/video.js) 视频播放器组件。
- [blockly](https://github.com/RaspberryPiFoundation/blockly) web 可视化编程语言（SCRATCH 等大部分少儿编程都是基于这个库）。
- [qrcodejs](https://github.com/davidshimjs/qrcodejs) 二维码生成库。

## jsx

JSX 是 js 的扩展语言，在 JS 的基本语法上扩展出可以直接写 XML 的语法。
使用的时候通过 JSX 的编译器前端做语法分析得到中间信息。
通过提供一个 jsxFactory 工厂函数来对接编译器后端。
React 和 Vue 都实现了这个工厂函数来对接各自的后端 VDOM 模板引擎。
