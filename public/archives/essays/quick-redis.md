# Redis 速查

## 配置



## 常用 C 扩展

- [RediSearch](https://github.com/RediSearch/RediSearch) 全文搜索插件，对中文分词有问题。

## 自定义 C 扩展开发

由于 Redis 官方只针对 Linux 开发，所以使用的都是 Linux 的开发工具。
Redis 的 C 扩展项目结构简单，只需要引入 Redis 源码目录作为 include 目录 即可。
官方的示例也很简单。

```bash
# 构建
gcc -fPIC -shared -I /src/redis/src main.c -o demo.so

# 启动 redis 时指定自定义的扩展 so 文件。
redis-server --loadmodule ./demo.so
```

```ini
# 除了命令参数还可以在配置文件中加入自定义模块
loadmodule /path/to/demo.so
```

```redis
-- 通过 Redis 的命令加载也行
MODULE LOAD /path/to/demo.so
```

```c
#include "redismodule.h"
#include <stdlib.h>

// 自定义 Redis 命令 函数定义
int ExertRand_RedisCommand(RedisModuleCtx *ctx, RedisModuleString **argv, int argc) {
    RedisModule_ReplyWithLongLong(ctx,rand());
    return REDISMODULE_OK;
}

// 这个名字是固定的，模块被加载就会调用。
int RedisModule_OnLoad(RedisModuleCtx *ctx, RedisModuleString **argv, int argc) {
    // 初始化模块
    if (RedisModule_Init(ctx,"demo",1,REDISMODULE_APIVER_1) == REDISMODULE_ERR) {
        return REDISMODULE_ERR;
    }

    // 注册命令 可以是 demo.rand 这种好区分的， 也可以按常规 RAND 去注册。
    if (RedisModule_CreateCommand(ctx,"demo.rand", ExertRand_RedisCommand, "fast random", 0, 0, 0) == REDISMODULE_ERR) {
        return REDISMODULE_ERR;
    }

    return REDISMODULE_OK;
}
```
