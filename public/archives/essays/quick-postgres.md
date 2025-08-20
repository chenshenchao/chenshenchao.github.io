# [草稿]Postgres 速查

[pgAdmin](https://www.pgadmin.org/) 客户端管理工具
[下载 Windows 版本](https://www.postgresql.org/download/windows/) 有些编译用到 libpq.lib 和 libpq.dll 库。

## 数据类型

- bigint ：整型64位
- character(*) ：定长字符串
- character varying(*) ：可变长字符串
- timestamp with/without time zone ：时间类型 4713 BC 至 294276 AD。
- numeric(10, 2) ：定点数，类似 MySQL 的 DECIMAL(10, 2) 
- json ：JSON 文本，存储 JSON 文本，查询较慢，不可以加索引。
- jsonb ：JSON 存储，底层是二进制，性能好，可以加索引。

### 自增

```sql
CREATE TABLE public.t_demo
(
    -- 自增 ID 定义
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    PRIMARY KEY (id)
);
```

### 时间

timestamp with time zone 会根据时区自动转换成 UTC，查询时 AT TIME ZONE 'Asia/Shanghai' 指定时区转换。
timestamp without time zone 等价于 MySQL 的 DateTime ，忽略时区，只根据时间戳字符串的日期时间转换。

```sql
-- 指定用户 postgres 用户在数据库 demo 的时区时 Asia/Shanghai
ALTER ROLE postgres IN DATABASE demo SET "TimeZone" TO 'Asia/Shanghai';
```

### 表空间

表空间用来指定数据存储的物理位置。默认 pg_default 就是放在默认位置。

```sql
# 创建表空间，指定路径。
CREATE TABLESPACE fast_ssd LOCATION '/mnt/ssd/postgres_data';
```