# TypeScript 速查

## 常用库

- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) @type/* 集合仓库，给 JS 库加上类型。
- [unplugin-dts](https://github.com/qmhc/unplugin-dts) 支持多种构造工具的通过 *.ts、*.vue 生成 *.d.ts 文件的构造工具插件。
- [date-fns](https://github.com/date-fns/date-fns) 日期库
- [es-toolkit](https://github.com/toss/es-toolkit) 类 lodash 工具库。
- [radash](https://github.com/sodiray/radash) 类 lodash 工具库。
- [superjson](https://github.com/flightcontrolhq/superjson) 解决 JSON 不支持 bigint 和 Date 等问题。
- [noble-hashes](https://github.com/paulmillr/noble-hashes) 纯 TS 实现的 HASH 算法库。
- [hash-wasm](https://github.com/Daninet/hash-wasm) 基于 WASM 的 HASH 算法库。
- [editor.js](https://github.com/codex-team/editor.js) 富文本编辑器。
- [canvas-editor](https://github.com/Hufe921/canvas-editor) 类似 Office Word 的一个 canvas/svg 编辑器，可以通过插件导出 svg 或 pdf 文件。
- [wolf-table](https://github.com/wolf-table/table) 类似 Office Excel 的 canvas 编辑器。
- [diagram-maker](https://github.com/awslabs/diagram-maker) 流程图、导图等图编辑器库。
- [ag-grid](https://github.com/ag-grid/ag-grid) 支持 React、Vue 等多框架的表格库。
- [faker](https://github.com/faker-js/faker) 生成伪造数据的库，可以用来生成测试数据。
- [Prisma](https://github.com/prisma/prisma) 数据库 ORM 功能齐全。
- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) 数据库 ORM 轻量级。
- [sequelize](https://github.com/sequelize/sequelize) 数据库 ORM 比较早就有，版本比较多，一些老项目可能会遇到。
- [typeorm](https://github.com/typeorm/typeorm) 数据库 ORM 代码设计比较好，性能性能不足，工具不齐全，只能算轻量级。
- [pg-logical-replication](https://github.com/kibae/pg-logical-replication) PostgreSQL WAL 数据复制库。
- [libsql-client-ts](https://github.com/tursodatabase/libsql-client-ts) libsql 客户端。
- [ioredis](https://github.com/redis/ioredis) redis 官方的客户端库。
- [node-redis](https://github.com/redis/node-redis) redis 官方的客户端库。
- [fingerprintjs](https://github.com/fingerprintjs/fingerprintjs) 生成浏览器指纹。
- [uuid](https://github.com/uuidjs/uuid) UUID 生成库
- [dinero.js](https://github.com/dinerojs/dinero.js) 十进制数，内置货币处理。
- [protobuf-ts](https://github.com/timostamm/protobuf-ts) protobuf 的 ts 第三方实现。
- [protoc-gen-ts](https://github.com/thesayyn/protoc-gen-ts) protobuf 的 ts 第三方实现。
- [ts-proto](https://github.com/stephenh/ts-proto) protobuf 的 ts 第三方实现。
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) 通过类名管理 CSS 的库，结合 clsx 库开发很方便。
- [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) 对 tailwindcss 的动画扩展库。
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) 运行时合并类库，可能助长代码变脏，若能编译阶段检查出来会更好。
- [lucide](https://github.com/lucide-icons/lucide) 支持多种框架（React、Vue 等）的图标集合。
- [embla-carousel](https://github.com/davidjerleke/embla-carousel) 支持多种框架（React、Vue 等）的轮播图。
- [jose](https://github.com/panva/jose) jwt 库。
- [faker-js](https://github.com/faker-js/faker) 开始时调试数据生成库。
- [i18next-resources-for-ts]() i18next 给资源生成 TS 类型。
- [lingui](https://github.com/lingui/js-lingui) i18n 库。
- [motion](https://github.com/motiondivision/motion) 动画库。
- [floating-ui](https://github.com/floating-ui/floating-ui) 原 Popuper.js 发展起来的弹出层库，提供 React 和 Vue 封装。
- [pixijs](https://github.com/pixijs/pixijs) 2D webGL 游戏引擎。
- [pixi-tiledmap](https://github.com/riebel/pixi-tiledmap) pixi tilemap 库。
- [Tone.js](https://github.com/Tonejs/Tone.js) 浏览器端 电子音乐 生成库。
- [jest](https://github.com/jestjs/jest) 单元测试框架。

### web

- [strapi](https://github.com/strapi/strapi) CMS 项目。
- [egg](https://github.com/eggjs/egg) web 框架。
- [eggjs static](https://github.com/eggjs/static)
- [mdui](https://github.com/zdhxiong/mdui) 安卓 Material 3 风格的 UI 组件库。
- [lit](https://github.com/lit/lit) 基于 web components 开发组件的框架。

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

### 修改模块的类型

有时候一些库给出的类型不符合预期，可以通过这种方式改掉其类型申明。

```ts
// ../next-auth.d.ts
// 引入这个模块，如果只是修改部分类型这样才能把其原本的类型引入。
import "next-auth";

// 对他的类型做修改。
declare module "next-auth" {
  interface User {
    id: number;
    permissions: string[];
  }

  interface Session {
    user: User;
  }
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
type B = { [key: string]: number };
```

```ts
type A = (a: number, b: string) => { id: number; name: string };
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
