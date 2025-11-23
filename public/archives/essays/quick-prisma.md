# prisma 速查

```bash
# 安装工具，在项目中安装命令行工具用于生成代码。
npm i -D prisma

# 安装客户端伪包，这个包是空的，只是给生成文件提供一个放代码的地方。
npm i @prisma/client

# 7.0 开始，数据库设配器拆到其他包,需要手动引入。
npm i @prisma/adapter-pg pg dotenv
npm i -D @types/pg
```

```bash
# 创建一个名叫 init 的迁移脚本
npx prisma migrate dev --name init

# 执行迁移脚本
npx prisma migrate deploy

# 执行数据脚本
npx prisma db seed

# 生成客户端代码
npx prisma generate
```

## prisma/schema.prisma

```prisma
// 客户端配置 2 选 1
generator client {
  // 1. 配置自定义路径
  provider = "prisma-client" // 自定义路径使用 prisma-client
  output   = "../generated/prisma" // 自定义路径

  // 2. 使用 @prisma/client
  provider = "prisma-client-js" // 使用 @prisma/client 必须使用 prisma-client-js
}

// 数据库配置
datasource db {
  // 可以是其他数据库，如 mysql 、 postgresql 等。
  provider = "sqlite"
}

// 模型，不同数据库有不同的属性，如：
// @db.Char(60) @db.VarChar(60) 是 mysql、postgresql 才能用的，sqlite 不允许。
model Account {
  id          Int      @id @default(autoincrement())
  sign        String   @unique
  secret      String
  permissions Json     @default("[]")
  createAt    DateTime @default(now())
  updateAt    DateTime @default(now())
  lastLoginAt DateTime @default(now())
}
```

## 配置 prisma.config.ts

从 5.16.0 版本开始 prisma.config.ts 正式启用，没有此文件会有警告。

```ts
import path from "node:path";
import { defineConfig, env } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts',
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

## prisma/seed.ts

数据脚本的入口文件 seed.ts 用于生成和更新数据，一般给项目提供初始数据，以及之后项目变更提供自动化更新数的功能。

```ts
import { PrismaClient } from "@prisma/client";

// 7.0 以前
const prisma = new PrismaClient();

async function main() {
  // 通过 cross-env NODE_ENV=development 等添加环境变量或者其他手段。
  const isFake = process.env.NODE_ENV == "development";
  console.log("env", process.env.NODE_ENV， isFake);

  if (isFake) {
    // 添加一些用于开发阶段的调试数据。
  }

  // 一些数据库数据的操作脚本，正式数据库的数据操作。
  await prisma.account.createMany({
    data: [
      {
        sign: "",
        secret: "",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

## lib/prisma.ts

7.0 后需要显式设配数据库，所以官方示例建议定义一个库文件用于共享客户端。

```ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
```
