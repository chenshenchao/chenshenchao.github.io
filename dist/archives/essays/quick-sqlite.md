# Sqlite 速查

## 类型

Sqlite 是动态类型，所以建表时列可以不指定类型。除了主键（估计是为了优化，有类型更好优化。），即便指定了类型，也可以往里面存其他类型。

### 基本类型

低层上 Sqlite 存储只用到了以下5种，而在这5种数据之上做扩展来实现其他类型。

- NULL
- INTEGER 8字节整形
- REAL    8字节双精度浮点
- TEXT
- BLOB

### 亲和类型（type affinity）

亲和类型只是一种建议类型，在存储时 Sqlite 会尝试将数据转化为合适的基础类型。

```sql
-- 通过 typeof 查看数据类型，可以看到同列存在各种类型。
SELECT id, typeof(other_column) FROM t1;
```

- INT
- INTEGER
- TINYINT
- SMALLINT
- MEDIUMINT
- BIGINT


## 严格模式（STRICT MODE）

强制要求类型指定为以下：

- INT
- INTEGER
- REAL
- TEXT
- BLOB
- ANY

```sql
CREATE TABLE t1(a ANY) STRICT;
```

## 函数

### 时间函数

```sql
-- 当天 0时区 YYYY-MM-DD
SELECT date('now');
-- 当天 本地时区 YYYY-MM-DD
SELECT datetime('now', 'localtime');

-- 当月 +1 个月 -1 天，取到了当月的最后一天。
SELECT date('now','start of month','+1 month','-1 day');

-- 当时 HH:MM:SS
SELECT time('now');

-- 此时此刻 0时区
SELECT datetime('now');
-- 此时此刻 本地时区
SELECT datetime('now', 'localtime');

-- 当前时间 UNIX 时间戳
SELECT strftime('%s', 'now');

-- 格式化当前时间
SELECT strftime('%Y-%m-%d %H:%M:%S', 'now');

-- 得到当前时间，可见 strftime('%s', 'now', 'localtime') 取出来的不是 UNIX 时间戳，而是叠加了本地时区，所以不好。
SELECT datetime(strftime('%s', 'now', 'localtime'), 'unixepoch');
-- 和上面一样的结果，确保 strftime('%s', 'now') 是 UNIX 时间戳，这样有利于数据统一。
SELECT datetime(strftime('%s', 'now'), 'unixepoch',  'localtime');
```