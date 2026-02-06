# Go 速查

[GitHub 源码](https://github.com/golang/go)

## 常用库

- [logrus](https://github.com/sirupsen/logrus) 结构化的日志库。
- [zerolog](https://github.com/rs/zerolog) JSON 日志。
- [pie](https://github.com/elliotchance/pie) 切片(slice) 和 字典(map) 功能扩展库。
- [bbolt](https://github.com/etcd-io/bbolt) 可内嵌的键值对数据库。
- [kektordb](https://github.com/sanonone/kektordb) 可内嵌到项目的向量数据库。
- [bleve](https://github.com/blevesearch/bleve) 可内嵌的全文搜索、向量搜索数据库。
- [riot](https://github.com/go-ego/riot) 可内嵌的全文搜索数据库。
- [urfave/cli](https://github.com/urfave/cli) 命令行参数分析库。
- [pgx](https://github.com/jackc/pgx) PostgreSQL 客户端库。
- [golang-migrate](https://github.com/golang-migrate/migrate) 数据库迁移命令行工具与库。
- [go-faker](https://github.com/go-faker/faker) 生成调试开发数据的库。
- [gorm](https://github.com/go-gorm/gorm) 国人开发的 ORM ，动态类型，功能比较全。
- [sqlx](https://github.com/jmoiron/sqlx) 扩展标准库 database/sql 的三方库。
- [go-mysql](https://github.com/go-mysql-org/go-mysql) 纯 Go 实现的 MySQL 客户端，支持binlog做数据迁移。
- [btree](https://github.com/google/btree) 谷歌开发的一个b树实现。
- [tinygo](https://github.com/tinygo-org/tinygo) GO 的 MCU、WASM 编译器。
- [unioffice](https://github.com/unidoc/unioffice) Word、Excel、PPT 库。
- [unipdf](https://github.com/unidoc/unipdf) PDF 库。

### Web 框架

- [kratos](https://github.com/go-kratos/kratos) 基于 Protobuf 的微服务框架。
- [go-micro](https://github.com/micro/go-micro) 简易的 Web 框架。

### UI 库

- [fyne](https://github.com/fyne-io/fyne) 跨平台，安卓端比较成熟。

## 常用命令

```bash
# 构建
# -gcflags="-m" 打印内联信息
go build -gcflags="-m" main.go
```

## 单元测试

```bash
# 当前目录执行测试
go test

# 遍历目录执行测试
go test ./...
```

## 交叉编译

```bat
@rem 配置环境变量指定平台，编译。
set GOOS=linux
set GOARCH=amd64
go build .
```


