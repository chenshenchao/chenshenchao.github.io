# TypeScript 速查

## 常用库

- [date-fns](https://github.com/date-fns/date-fns) 日期库
- [canvas-editor](https://github.com/Hufe921/canvas-editor) 类似 Office Word 的一个 canvas/svg 编辑器，可以通过插件导出 svg 或 pdf 文件。
- [faker](https://github.com/faker-js/faker) 生成伪造数据的库，可以用来生成测试数据。

## 类型系统

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

### keyof

```typescript
// keyof 得到的是个枚举类型
// keyof any 这点很诡异，是个“类型枚举”，泛型的 T 相当于 any
// keyof C 具体类型，得到的是个“字符串枚举”
type A = keyof any; // string | number | symbol ; 

class C {
    a: string;
    b: number;
}
type B = keyof C; // "a" | "b" ; 得到的是一个字符串枚举。


// 这么写好像完全没有意义，因为具体类型的枚举就是 string 的。
// 但是在泛型里配合拼接语法就可以限定类型。
type B2 = keyof C & string; 
```

### 忽略

这种方式一般在赶工的时候类型又比较复杂，可以应急使用，忽略掉类型检查让 ts 退化成 js 就不会有类型报错。

```ts
// 单行忽略(添加到特定行的行前来忽略这一行的错误)
// @ts-ignore 
aaa = 123;

// 跳过对某些文件的检查 (添加到该文件的首行才起作用)
// @ts-nocheck

// 对某些文件的检查
// @ts-check
```