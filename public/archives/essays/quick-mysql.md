# MySQL 速查

MySQL 目前由甲骨文维护，同时有一个开源分支 MariaDB 基本上兼容。

## 模块与引擎

- [mroonga](https://github.com/mroonga/mroonga) 基于 Groonga 的引擎。

## 基础类型

- TINYINT(*) 8位，*只影响格式化输出。
- INT(*) 32位，*只影响格式化输出。
- BIGINT(*) 64位，*只影响格式化输出。
- CHAR(*) 定长字符串，*影响其长度。
- VARCHAR(*) 不定长字符串，*影响最大长度。
- DATETIME 不包含时区的时间类型 0000-01-01 00:00:00 至 9999-12-31 23:59:59
- TEXT
- LONG TEXT
- BLOB

## mysql 客户端命令

```bash
# 启用 MySQL 命令行客户端
# MySQL 5.5 需要删除 /etc/my.cnf 的 skip_name_resolve 才能用 mysql -p root 登录
mysql -p root

# 通过命令修改 root 密码
mysql -e "SET PASSWORD FOR 'root'@'localhost' = PASSWORD('password');"

# 魔改 MySQL 源码时候因为出错可能用到的命令。
# 初始化 datadir
mysqld --initialize --console --datadir="D:\Program Files (x86)\MariaDB\data"
mariadb-upgrade -u root -p --datadir="C:\mariadb-data"
```

## 常用 SQL

### 变量

```bash
# 查看 x 协议
SHOW VARIABLES LIKE '%mysqlx%'
```

### 数据结构

```sql
-- 列举数据库
SHOW DATABASES;

-- 列举表
SHOW TABLES FROM db_name;

-- 列举表（条件）
SHOW TABLES FROM db_name WHERE Name LIKE '%%';

-- 显示表的 DDL
SHOW CREATE TABLE tbl_name;
```

### 用户与权限

```sql
-- 创建用户
CREATE USER user_name IDENTIFIED BY 'password';

-- 删除用户
DROP USER user_name; -- 不填 Host 默认 '%'
DROP USER user_name@'%'; -- 同上
DROP USER user_name@''; -- 空 Host 这种一般是操作失误，可以通过此删除。

-- 修改密码
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';

-- 修改密码指定加密类型（不同版本的 MySQL 默认密码加密类型不同，首次修改 root 密码必须是 localhost）
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

-- 修改密码（旧，5.6 版本及以前）
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('password'); 

-- 直接修改 mysql.user 表（旧，5.7 版本及以前）
UPDATE mysql.user SET authentication_string = PASSWORD('123456') WHERE User = 'root';

-- 直接通过 UPDATE 修改，执行的权限要求很高。
UPDATE mysql.user SET password=PASSWORD('password') WHERE user='user_name';
```

```sql
-- 赋权（大部分）
GRANT ALL PRIVILEGES ON db_name.* TO 'user_name'@'%';

-- 赋权（指定 DROP SELECT）
GRANT DROP, SELECT ON db_name.* TO 'user_name'@'%';

--  赋权（密码，已有账号如果再赋权，密码会被清掉，所以要带上密码）
GRANT ALL PRIVILEGES ON db_name.* TO 'user_name'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;

-- 删除权限（全部）
REVOKE ALL ON db_name.* TO 'user_name'@'%';

-- 删除权限（指定 DROP SELECT）
REVOKE DROP, SELECT ON ON db_name.* TO 'user_name'@'%';

-- 刷新权限，修改后要执行，不然不起效。
FLUSH PRIVILEGES;

-- 查看用户权限
SHOW GRANTS FOR user_name;

-- 查看账号信息
SELECT * FROM mysql.user;

-- 查看账号信息（条件）
SELECT * FROM mysql.user WHERE Host='' OR User IN ('');
```

### 预处理

```sql
/* 预处理,链接级别的，链接断开，预处理就没了。（标准SQL 没有明确规范，但 MySQL，Oracle,PostgreSQL 都是这样处理的） */
PREPARE stmt1 FROM 'SELECT * FROM table1 WHERE name LIKE ?';
/* 执行 */
EXECUTE stmt1 USING '%张%';
/* 删除预处理 （标准 SQL 的关键字）*/
DEALLOCATE PREPARE stmt1;
/* 删除预处理 （MySQL 的关键字）*/
DROP PREPARE stmt1;
```

### 二进制日志（binlog）

```sql
-- 显示二进制日志列表
SHOW BINARY LOGS;

-- 列举事件
SHOW BINLOG EVENTS IN 'mysql-bin.000001' FROM 4 LIMIT 100, 100;

-- 查询主机状态
SHOW MASTER STATUS;

-- 删除指定日志文件
PURGE MASTER LOGS TO 'mysql-bin.000001';

-- 删除指定时间
PURGE MASTER LOGS BEFORE '2025-03-15 00:00:00'

-- 删除 7 天前的日志
PURGE MASTER LOGS BEFORE DATE_SUB(CURRENT_DATE, INTERVAL 7 DAY);
```

## 常见问题

### 5.7 及以后 ONLY_FULL_GROUP_BY 限制

#### 1. 运行时修改，重启 MySQL 会被重置。
```sql
-- 查看 SQL 模式
SELECT @@global.sql_mode;

-- 修改 sql_mode，一般先查看后在原来的基础上修改妥当些。
SET GLOBAL sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
```

#### 2. 修改配置文件

```ini
sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'
```


## 常见谬误

### IN 和 EXISTS

常见的一个谬误就是认为 EXISTS 比 IN 快，这是很多人在读文章的时候没看“先决条件”导致的，只记住了个结论，却没有记住得出这个结论必须是在“特定条件”下的。

```sql
-- 以下假定
-- 1. t1.a 有建索引
-- 2. t2.c 没有索引需要扫表，有索引则 EXISTS 和 IN 没区别，所以必须没索引。
-- 3. t1 一共 10万 行数据
-- 4. t2 一共 5万 行数据

-- 1. IN 最快，因为只做 2 次 SELECT
-- 所以这个实际扫描 5万
-- 如果 t2.c 有索引，则只执行 2 次
SELECT a, b FROM t1
WHERE a IN (SELECT c FROM t2 WHERE c IN (1,2,3 ....)) -- 这里假定条件是个已知值

-- 2. EXISTS 慢, 因为做了 10万 次 SELECT，只是这些 SELECT 比较快跳出（不一定遍历 5万 行，条件命中就跳出）。
-- 所以这个实际扫描  【10万, 10万 * 5万 = 50亿] 这个区间内，不同数据不同最少 10万，最多 50亿。
-- 如果 t2.c 有索引，则是 10万 次
SELECT a, b FROM t1
WHERE EXISTS (SELECT c FROM t2 WHERE t1.a = t1.c)

-- 3. IN 最慢, 因为做了 10万 次 SELECT，只是这些 SELECT 必须全部扫完才跳出（扫足 5万 行）。
-- 所以这个实际扫描  10万 * 5万 = 50亿
-- 如果 t2.c 有索引，则是 10万 次
SELECT a, b FROM t1
WHERE a IN (SELECT c FROM t2 WHERE t1.a = t1.c)
```

可以看出作为条件的子查询 t2 如果 WHERE 后面的条件 有 t1 的字段，那么用 EXISTS 快，如果没有 t1 的字段，用 IN 快（快很多）。
而使用 EXISTS 是应该避免的，当你需要用到 EXISTS 的时候，你的表估计设计得不合理。
不合理之处就在于作为子查询的 t2 使用了 t1 的字段作为条件，这才是慢的根源，而仅是用 EXISTS 替代 IN 仅仅只是饮鸩止渴。
因为当 t2 的查询出现了 t1 字段作为条件时，就是要逐行执行，只是 EXISTS 有“短路” 机制，但是其本质还是逐行执行。
所以问题不在于 IN 和 EXISTS ，而在于你不应该让 t1 的字段出现在 子查询 t2 的 WHERE 里面，导致了逐行执行子查询。

结论：EISTS 比 IN 快，先决条件是子查询条件中有主查询表字段，且子表字段没索引。


## Docker

```bat
@rem 5.7.44
@rem -v D:/MySQL/5.7.44/conf:/etc/mysql  如果要把配置弄出来，先要确保本地目录中有配置文件。
docker run -itd -v D:/MySQL/5.7.44/data:/var/lib/mysql -v D:/MySQL/5.7.44/file:/var/lib/mysql-files  -p 13357:3306 -e MYSQL_ROOT_PASSWORD=root --name mysql5744 mysql:5.7.44
```