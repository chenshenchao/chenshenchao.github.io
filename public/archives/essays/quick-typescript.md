# TypeScript 速查

## 常用库

- [date-fns](https://github.com/date-fns/date-fns) 日期库
- [canvas-editor](https://github.com/Hufe921/canvas-editor) 类似 Office Word 的一个 canvas/svg 编辑器，可以通过插件导出 svg 或 pdf 文件。
- [faker](https://github.com/faker-js/faker) 生成伪造数据的库，可以用来生成测试数据。

## 类型声明

当使用 JS 代码时，如果其没有提供 *.d.ts 文件声明类型的话，我们可以自己声明。

```ts
// 扩展全局命名空间
declare {
    // 声明结构
    interface YourInterface {
        f1: {
            some: {
                [key: string]: any;
            }
        }
    }

    // 声明这个字段。
    var your: Your;
}
```