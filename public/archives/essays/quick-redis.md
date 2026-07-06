# Redis 速查

- [redis 源码](https://github.com/redis/redis)
- [hiredis](https://github.com/redis/hiredis) 官方 c 的 redis 客户端库。
- [go-redis](https://github.com/redis/go-redis) 官方 go 的 redis 客户端库。
- [jedis](https://github.com/redis/jedis)官方 java 的 redis 客户端库。
- [redis-py](https://github.com/redis/redis-py) redis 官方的 python 客户端库。
- [ioredis](https://github.com/redis/ioredis) redis 官方 nodejs 的客户端库。
- [node-redis](https://github.com/redis/node-redis) redis 官方 nodejs 的客户端库。
- [valkey](https://github.com/valkey-io/valkey) redis 分裂的社区项目。
- [garnet](https://github.com/microsoft/garnet) 微软用 .NET 开发的兼容 Redis 的键值对数据库。
- [dragonfly](https://github.com/dragonflydb/dragonfly) 兼容 Redis 的键值对数据库。
- [Windows 下的 redis](https://github.com/tporadowski/redis) 第三方提供的 redis ，版本相对滞后。
- [microsoftarchive redis](https://github.com/microsoftarchive/redis) redis 3.0 的 Windows 版本。
- [ssdb](https://github.com/ideawu/ssdb) 键值对数据库服务，可替代 Redis ，已经停止维护。
- [ssdb-bin](https://github.com/ideawu/ssdb-bin) ssdb 的二进制文件，滞后。
- [KeyDB](https://github.com/Snapchat/KeyDB) 扩展 Redis 为多线程的项目。
- [predixy](https://github.com/joyieldInc/predixy) redis 代理服务器。
- [twemproxy](https://github.com/twitter/twemproxy) twitter 开源的分布式 redis 代理服务器。

## 扩展

- [RediSearch](https://github.com/RediSearch/RediSearch) 全文搜索插件，对中文分词有问题。
- [redisearch-go](https://github.com/RediSearch/redisearch-go) RediSearch go 客户端。
- [redisearch-php](https://github.com/ethanhann/redisearch-php) RediSearch PHP 客户端。
- [RedisGraph](https://github.com/RedisGraph/RedisGraph) 图数据库插件。
- [RedisJSON](https://github.com/RedisJSON/RedisJSON) 提供 JSON 类型，Redis 8 后默认支持 JSON 类型，这个扩展不再更新。

## 开发库

- [redigo](https://github.com/gomodule/redigo) 第三方 go 的 redis 客户端库。
- [xredis](https://github.com/0xsky/xredis) 第三方 c++ 的 redis 客户端库。
- [redis-rs](https://github.com/redis-rs/redis-rs) 第三方 rust 的 redis 客户端。
- [redisson](https://github.com/redisson/redisson) 第三方 java 的 redis 客户端库。
- [phpredis](https://github.com/phpredis/phpredis) 第三方 php 的 redis 客户端。
- [StackExchange.Redis](https://github.com/StackExchange/StackExchange.Redis) C# 开发的 .NET 的 Redis 客户端库。
- [aioredis-py](https://github.com/aio-libs-abandoned/aioredis-py) 第三方 python 支持异步的 redis 客户端。
- [walrus](https://github.com/coleifer/walrus) 第三方 python 简化 redis 客户端的使用，做了封装。
- [node-cache-manager-redis-store](https://github.com/dabroek/node-cache-manager-redis-store) 第三方 nodejs 的 cache-manager 使用 redis 客户端。

## 项目

- [AnotherRedisDesktopManager](https://github.com/qishibo/AnotherRedisDesktopManager) Redis 图形客户端工具。
- [RedisStudio](https://github.com/cinience/RedisStudio) Redis 图形客户端工具。
- [medis](https://github.com/luin/medis) 苹果 MAC 上的 Redis 客户端图形工具。
- [iredis](https://github.com/laixintao/iredis) Redis 命令行客户端工具。
- [redis-desktop-client](https://github.com/david1025/redis-desktop-client) electron + vue 开发的 redis 管理工具。

## 配置

## 值数据类型

- String: 字符串，SET、GET、MSET、MGET、APPEND、STRLEN、INCR、INCRBY、DECR、DECRBY、SETNX、SETEX、GETSET
- List: 列表，LPUSH、RPUSH、LPOP、RPOP、LRANGE、LLEN、LINDEX、LSET、LREM、LTRIM、BLPOP、BRPOP
- Set: 无序集合，SADD、SMEMBERS、SISMEMBER、SREM、SCARD、SPOP、SMOVE、SINTER、SUNION、SDIFF
- Hash: 散列表，HSET、HGET、HMSET、HMGET、HGETALL、HDEL、HLEN、HKEYS、HVALS、HINCRBY、HEXISTS
- Sorted Set/ZSet（1.2.0）： 有序集合，ZADD、ZRANGE、ZREVRANGE、ZSCORE、ZCARD、ZREM、ZRANK、ZREVRANK、ZINCRBY、ZINTERSTORE、ZUNIONSTORE
- Bitmap（2.2.0）: 位图，SETBIT、GETBIT、BITCOUNT、BITOP
- HyperLogLog(2.8.9): 基数统计，PFADD、PFCOUNT、PFMERGE
- Geo（3.2.0）: 地理位置，低层 ZSet，GEOADD、GEOPOS、GEODIST、GEORADIUS、GEORADIUSBYMEMBER、GEOHASH
- Bitfield（3.2.0）: 位域，增强 String，BITFIELD
- Stream（5.0.0）：消息流，XADD、XRANGE、XREVRANGE、XREAD、XGROUP、XREADGROUP、XACK、XLEN、XDEL
- JSON（7.0.0）：JSON.SET、JSON.GET、JSON.DEL、JSON.TYPE、JSON.NUMINCRBY、JSON.ARRAPPEND、JSON.OBJKEYS
- Time Series(7.2.0): 时序数据，TS.CREATE、TS.ADD、TS.RANGE、TS.REVRANGE、TS.MRANGE、TS.INFO、TS.ALTER、TS.DELRANGE


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
