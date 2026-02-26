# Go 速查

- [go 源码](https://github.com/golang/go)
- [glog](https://github.com/golang/glog)
- [uuid](https://github.com/google/uuid) 谷歌开源的 UUID 库。

## 常用库

- [golang-set](https://github.com/deckarep/golang-set) set 类型实现。
- [logrus](https://github.com/sirupsen/logrus) 结构化的日志库。
- [zerolog](https://github.com/rs/zerolog) JSON 日志。
- [pie](https://github.com/elliotchance/pie) 切片(slice) 和 字典(map) 功能扩展库。
- [urfave/cli](https://github.com/urfave/cli) 命令行参数分析库。
- [cobra](https://github.com/spf13/cobra) 命令行开发框架。
- [go-flags](https://github.com/jessevdk/go-flags) 命令行参数分析库。
- [kingpin](https://github.com/alecthomas/kingpin) 命令行参数分析库。
- [kong](https://github.com/alecthomas/kong) 命令行参数分析库。
- [go-faker](https://github.com/go-faker/faker) 生成调试开发数据的库。
- [tinygo](https://github.com/tinygo-org/tinygo) GO 的 MCU、WASM 编译器。
- [xlsReader](https://github.com/shakinm/xlsReader)  xls (Excel) 文件读取。
- [xls](https://github.com/extrame/xls) libxls 的 go 语言复刻，支持 xls 文件。
- [grate](https://github.com/pbnjay/grate) Excel .xls, .xlsx, .csv, .tsv 文件提取数据。
- [unioffice](https://github.com/unidoc/unioffice) Word、Excel、PPT 库。
- [unipdf](https://github.com/unidoc/unipdf) PDF 库。
- [gofpdf](https://github.com/jung-kurt/gofpdf) PDF 库。
- [maroto](https://github.com/johnfercher/maroto) 基于 gofpdf 的 PDF 库。
- [fresh](https://github.com/gravityblast/fresh) 实现 watch 功能，代码修改自动重启的命令行工具。
- [air](https://github.com/air-verse/air) 实现 watch 功能，代码修改自动重启的命令行工具。
- [godotenv](https://github.com/joho/godotenv) .env 处理库。
- [captcha](https://github.com/dchest/captcha) 验证码。
- [base64Captcha](https://github.com/mojocn/base64Captcha) base64 字符串格式的验证码。
- [otto](https://github.com/robertkrimen/otto) 可内嵌的 JS 解释器。
- [mo](https://github.com/samber/mo) 函数式的算子库。
- [lo](https://github.com/samber/lo) 链式库。
- [do](https://github.com/samber/do) 依赖注入库。
- [mimetype](https://github.com/gabriel-vasile/mimetype) 通过文件头部来判断文件 MIME 类型。
- [filetype](https://github.com/h2non/filetype) 通过文件头部来判断文件类型。
- [gopsutil](https://github.com/shirou/gopsutil) 进程系统监控库。
- [packr](https://github.com/gobuffalo/packr) go 低版本没有 embed 时，需要这个库来嵌入文件。
- [jiebago](https://github.com/wangbin/jiebago) jieba 中文分词。
- [mahonia](https://github.com/axgle/mahonia) 字符集转换库。

### 数据库

- [pgx](https://github.com/jackc/pgx) PostgreSQL 客户端库。
- [golang-migrate](https://github.com/golang-migrate/migrate) 数据库迁移命令行工具与库。
- [goleveldb](https://github.com/syndtr/goleveldb) 可内嵌的键值对数据库。
- [bbolt](https://github.com/etcd-io/bbolt) 可内嵌的键值对数据库。
- [rosedb](https://github.com/rosedblabs/rosedb) 可内嵌的键值对数据库。
- [kektordb](https://github.com/sanonone/kektordb) 可内嵌到项目的向量数据库。
- [bleve](https://github.com/blevesearch/bleve) 可内嵌的全文搜索、向量搜索数据库。
- [blevex](https://github.com/blevesearch/blevex) bleve 扩展。
- [bleve_index_api](https://github.com/blevesearch/bleve_index_api) bleve 索引API
- [riot](https://github.com/go-ego/riot) 可内嵌的全文搜索数据库。
- [gorm](https://github.com/go-gorm/gorm) 国人开发的 ORM ，动态类型，功能比较全。
- [sqlite](https://github.com/glebarez/sqlite) 纯 Go 的 Sqlite GORM 驱动。
- [sqlite](https://github.com/go-gorm/sqlite) Sqlite GORM 驱动，有 c 代码编译要求 c 编译环境（Windows 下装 tdm-gcc）。
- [sqlx](https://github.com/jmoiron/sqlx) 扩展标准库 database/sql 的三方库。
- [go-mysql](https://github.com/go-mysql-org/go-mysql) 纯 Go 实现的 MySQL 客户端，支持binlog做数据迁移。
- [go-linq](https://github.com/ahmetb/go-linq) 链式 SQL 拼接，远达不到 C# 的 LINQ 程度，没有改变 GO 语法。
- [go-redis](https://github.com/redis/go-redis) redis 客户端。
- [redigo](https://github.com/gomodule/redigo) redis 客户端。
- [go-duckdb](https://github.com/marcboeker/go-duckdb) database/sql 的 duckDB 引擎。
- [btree](https://github.com/google/btree) 谷歌开发的一个b树实现。
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) ART树实现。

### Web 框架

- [echo](https://github.com/labstack/echo) web 框架。
- [echo-swagger](github.com/swaggo/echo-swagger) 为 echo 提供的 OpenAPI 实现。
- [kratos](https://github.com/go-kratos/kratos) 基于 Protobuf 的微服务框架。
- [iris](https://github.com/kataras/iris) HTTP/2  Web 框架。
- [gf](https://github.com/gogf/gf)  Web 框架。
- [go-micro](https://github.com/micro/go-micro) 简易的 Web 框架。
- [go-micro plugins](https://github.com/go-micro/plugins)
- [go-micro generator](https://github.com/go-micro/generator)
- [wasmer-go](https://github.com/wasmerio/wasmer-go) wasm 运行时。
- [vugu](https://github.com/vugu/vugu) go + wasm 的 web UI 库。
- [beego](https://github.com/beego/beego) Web 框架。
- [bee](https://github.com/beego/bee) beego 的命令行工具。
- [buffalo](https://github.com/gobuffalo/buffalo) Web 框架。
- [go-admin](https://github.com/go-admin-team/go-admin) Gin + Vue + Element UI & Arco Design & Ant Design 的管理系统脚手架，后端项目。
- [go-admin-ui](https://github.com/go-admin-team/go-admin-ui) go-admin 的前端。
- [goa](https://github.com/goadesign/goa) 通过 design.go（类 protobuf 的 *.proto 文件） 文件生成架构代码的 web 框架。
- [zmq4](https://github.com/pebbe/zmq4) ZeroMQ 实现。
- [jet](https://github.com/CloudyKit/jet) HTML 模板引擎库。
- [goview](https://github.com/foolin/goview) HTML 模板引擎库， html/template 的扩展。
- [gorazor](https://github.com/sipin/gorazor) 类 C# 的 Razor 风格模板引擎库。
- [pongo2](https://github.com/flosch/pongo2) 类 python 的 django 风格模板引擎库。
- [jwt](https://github.com/golang-jwt/jwt) jwt 库。

### UI 库

- [fyne](https://github.com/fyne-io/fyne) 跨平台，安卓端比较成熟。
- [wails](https://github.com/wailsapp/wails) 打包 Web 成 桌面应用 的框架。
- [hover](https://github.com/go-flutter-desktop/hover) Go 封装 flutter 的桌面应用开发框架。
- [spot](https://github.com/roblillack/spot) React 代码风格的 Go 桌面应用开发框架。

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


