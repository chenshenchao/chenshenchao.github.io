# TypeScript 速查

## 常用库

- [date-fns](https://github.com/date-fns/date-fns) 日期库
- [canvas-editor](https://github.com/Hufe921/canvas-editor) 类似 Office Word 的一个 canvas/svg 编辑器，可以通过插件导出 svg 或 pdf 文件。
- [faker](https://github.com/faker-js/faker) 生成伪造数据的库，可以用来生成测试数据。

## 类型系统

当使用 JS 代码时，如果其没有提供 \*.d.ts 文件声明类型的话，我们可以自己声明。

```ts
// 扩展全局命名空间
declare;
{
  // 声明结构
  interface YourInterface {
    f1: {
      some: {
        [key: string]: any;
      };
    };
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

### infer

这个类似 C++ 在模板中的 auto 关键字，用于让类型做出推导。
只能在 extends 子句中使用。

```ts
type TA<A extends [infer F]>; // 要求 A 必须至少有一个元素

type TB<A extends any[], R> = // 可以级联多级 三元符号判断不同类型。
    A extends [] ? () => R :
    A extends [infer F] ? (x: F) => R :
    A extends [infer F, ...infer FS] => (x: F) => TB<FS, R> :
    never;
```

### Exclude、Extract、NonNullable 和 Omit、Pick 和 Partial、Required、Readonly 和 Record 和 ReturnType、Parameters、ThisParameterType、OmitThisParameter 和 InstanceType

```ts
// 枚举操作
type A = "a" | "b" | "c";
type B = "a" | "d";
type C = Exclude<A, B>; // A 去掉 B 有的， "b" | "c"
type D = Extract<A, B>; // A 和 B 只保留相同的， "a"

type E = string | number | null | undefined;
type F = NonNullable<E>; // string | number
```

```ts
// 对象类型操作
// 定义，排除类型 T 里面的字段
type Omit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };

type A = {
  id: number;
  name: string;
  age?: number;
};

type B = Omit<A, "name" | "age">; // B 只剩下 A 的 id 字段。
type C = Pick<A, "name" | "age">; // C 只有 A 的 name 和 age 字段。

type D = Partial<A>; // D 有 A 全部字段，都是可选；{id?: number, ...}
type E = Required<A>; // E 有 A 全部字段，都非可选；{..., age: number }
type F = Readonly<A>; // F 有 A 全部字段，都是可选；{readonly id: number, ...}
```

```ts
// A 和 B 等价。
type A = Record<string, number>;
type B = { [key: string]: number; };
```

```ts
type A = (a:number, b:string) => { id: number; name: string };
type B = ReturnType<A>; // { id: number; name: string }
type C = Parameters<A>; // [a:number, b:string]

type D = { x: number };
type E = (this: D, y: number) => number;
type F = ThisParameterType<E>; // D
type G = OmitThisParameter<E>; // (y:number) => number
```

```ts
// 定义
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

// 这是个 class 不是 type
// type 在 js 是没有的，所以编译后被擦除
// class 是 js 有的，本质是一个函数。 
class CA = {
  id: number;
  constructor(id: number) { this.id = id;}
};
type A = typeof CA; // 得到的是构造函数，因为 CA 在 JS 层是函数，new (id: number) => CA 
type B = InstanceType<typeof CA>; // {id: number}
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
