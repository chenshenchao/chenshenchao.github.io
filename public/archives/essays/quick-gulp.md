# gulp 速查

## 常用插件

- gulp-concat 拼接

## 示例

gulp 命令会找打 gulpfile.js 文件并执行，gulpfile 的形式很像 makefile 或者 gradle.build 文件，都是定义各个任务，然后根据任务依赖按顺序条件执行任务，简单易懂。

### 拼接 JS

gulp 有很多插件，最常见的就是这个 gulp-concat 插件，用于拼接文件。

```js
const gulp = require("gulp");
const concat = require("gulp-concat");

// 拼接 JS 任务
gulp.task("concatJs", function () {
  return gulp
    .src(["src/main.js", "src/demo.js"])
    .pipe(concat("all.js"))
    .pipe(gulp.dest("dist"));
});

// 默认任务
gulp.task("default", gulp.series("concatJs"));

// 监听文件任务
gulp.task("watch", function () {
  gulp.watch("src/*.js", gulp.series("concatJs"));
  console.log("watch...");
});
```
