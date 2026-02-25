# [草稿]Haskell 速查

这个语言有个比 C++ 还严重的问题：允许函数名由几个基本操作符随意组合（下划线被算作字母了，不在操作符之列）。
导致“++”、“>>=”、“&&.”各种自定义的符号函数名，而操作符在少量时方便使用，当大量的库拥有各自的符号，或者各个库的符号冲突时就很混乱。
这点和数学语言很像，只有 +、=、*、/ 时非常好用，之后的越来越多各种 ∫、∑ 奇怪的符号就会使得记忆困难。

- [ghcup-hs](https://github.com/haskell/ghcup-hs)

## 常用库

- [Shelly.hs](https://github.com/gregwebs/Shelly.hs) 命令行工具开发库。
- [json-to-haskell](https://github.com/ChrisPenner/json-to-haskell) JSON 库。
- [logging-effect](https://github.com/ocharles/logging-effect) 日志库。
- [LambdaHack](https://github.com/LambdaHack/LambdaHack) roguelike 游戏引擎。
- [lens](https://github.com/ekmett/lens) 算子库。

### Web

- [ihp](https://github.com/digitallyinduced/ihp) 提供类 JSX 的 HSX 的 web 框架。
- [wai](https://github.com/yesodweb/wai) web 框架。
- [scotty](https://github.com/scotty-web/scotty) 基于 WAI 和 Warp 的 web 框架。
- [yesod](https://github.com/yesodweb/yesod) 基于 WAI 的 web 框架。
- [okapi](https://github.com/monadicsystems/okapi) web 框架。
- [Spock](https://github.com/agrafix/Spock) web 框架。
- [servant](https://github.com/haskell-servant/servant) web 框架。
- [hakyll](https://github.com/jaspervdj/hakyll) 静态站点的编译库。
- [websockets](https://github.com/jaspervdj/websockets)
- [Haxl](https://github.com/facebook/Haxl) HTTP 客户端库，并发、缓存等功能比较多。

### 数据库

- [beam](https://github.com/haskell-beam/beam) 类型安全的 SQL 库
- [persistent](https://github.com/yesodweb/persistent) 持久化封装库,支持多种数据库
- [orville](https://github.com/flipstone/orville) 一个 ORM
- [hasql](https://github.com/nikita-volkov/hasql) 基于 libpq 的 PostgreSQL 客户端驱动
- [mysql-haskell](https://github.com/winterland1989/mysql-haskell) 纯 Haskell 的 Mysql 客户端驱动。
- [beam-mysql](https://github.com/tathougies/beam-mysql)
- [mysql](https://github.com/paul-rouse/mysql) 绑定 mysqlclient。
- [mysql-simple](https://github.com/paul-rouse/mysql-simple) 绑定 mysqlclient。
- [sqlite-simple](https://github.com/nurpax/sqlite-simple) 绑定 sqlite。
- [hdbc](https://github.com/hdbc/hdbc) 类 JDBC 的 haskell 实现。

## 项目

- [Allure](https://github.com/AllureOfTheStars/Allure) 命令行 roguelike 游戏。
- [hledger](https://github.com/simonmichael/hledger) 会计工具。
- [unison](https://github.com/unisonweb/unison) Haskell 开发的一个类 Haskell 函数式语言。
