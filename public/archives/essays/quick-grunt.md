# Grunt 速查

[grunt 官网](https://gruntjs.com/)

我 2016 年在 FreeCodeCamp 学前端的时候，Grunt 是主要的构造工具，当时 gulp 已经在逐渐取代 Grunt 了。
grunt 是配置文件式的，这就显得 grunt 太死板了（也是其优点，死板≈简单）。
gulp 命令式的，应对复杂问题的时候 gulp 更方便自由，而且 gulp 的代码会更少。
虽然 gulp 和 grunt 都是模仿的 make 且文件都叫 gulpfile 、 gruntfile 这种类似 makefile 的形式，但是依赖这方面都不如 makefile，所以才会有后来的 webpack 和 rollup 这些。
后来的构造工具几乎就是吸收了 gulp 的管道 和 grunt 的配置文件的结合体。
不管 webpack 还是 vite 都有个配置文件，而插件又都是在各个生命周期里以管道方式串连的。
都要写配置文件，其他工具都太好了，所以 grunt 无可避免地要被完全取代。
