# PHP 速查

- [php-src](https://github.com/php/php-src) PHP 源码
- [php-sdk-binary-tools](https://github.com/php/php-sdk-binary-tools) Windows 下 PHP 构建工具。
- [php-sdk-binary-tools](https://github.com/microsoft/php-sdk-binary-tools) 微软提供的，Windows 下 PHP 构建工具，已经交给 PHP 官方维护，此仓库不在维护。
- [zephir](https://github.com/zephir-lang/zephir) 编译型语言，用于 PHP C 扩展的开发。
- [pie](https://github.com/php/pie) 取代 PECL 的下一代 C 扩展安装工具。

- [Framework Interop Group](https://www.php-fig.org/) PSR 等规范的定制组织。
- [cache](https://github.com/php-fig/cache) PSR6 缓存规范接口。
- [simple-cache](https://github.com/php-fig/simple-cache) 缓存接口简单实现。
- [http-message](https://github.com/php-fig/http-message) PSR7

## 常用命令

```bash
# 查看版本
php -v

# 进入交互模式
php -a

# 启动开发服务器，类似 CGI 服务，找不到的文件会执行目录下 router.php 文件处理。
php -S [host:port] [document_root]
php -S 0.0.0.0:80
```

## C 扩展

- [xdebug](https://github.com/xdebug/xdebug)
- [php-ext-xlswriter](https://github.com/viest/php-ext-xlswriter) XLSX 工具库。
- [cphalcon](https://github.com/phalcon/cphalcon) 全栈框架。
- [phpredis](https://github.com/phpredis/phpredis) redis 客户端。
- [xhprof](https://github.com/phacility/xhprof) 已经不维护，函数级别的性能分析扩展。
- [xhprof](https://github.com/longxinH/xhprof) fork phacility/xhprof 继续维护。
- [php-xhprof-extension](https://github.com/tideways/php-xhprof-extension) for longxinH/xhprof。
- [swow](https://github.com/swow/swow) 跨平台的协程 IO 引擎。
- [phptrace](https://github.com/Qihoo360/phptrace) 360 开源的跟踪探针调试插件。
- [Molten](https://github.com/chuan-yun/Molten) 跟踪探针调试插件。
- [swoole](https://github.com/swoole/swoole-src) 异步扩展，标准库已经支持异步。
- [yaf](https://github.com/laruence/yaf) 鸟哥的 web 框架。
- [cphalcon7](https://github.com/dreamsxin/cphalcon7)  web 框架。

## Composer

- [composer 源码](https://github.com/composer/composer)
- [satis](https://github.com/composer/satis) composer 仓库服务器，可部署私有仓库服务。
- [semver](https://github.com/composer/semver) 版本号字符串 比较等函数扩展库。

```bash
# 安装依赖，忽略 ext-* 的 C 扩展
# 一些用 docker 做开发环境时，依赖只支持 Linux 的比如 swoole 可以在 Windows 安装依赖。
composer install --ignore-platform-reqs

# 强制回退到指定版本，把依赖都回退了。
composer require monolog/monolog:1.25.0 --with-all-dependencies
```

### 常见包或框架

- [zendframework](https://github.com/zendframework/zendframework) 维护 PHP 的 Zend 公司开发的框架，已多年不维护。
- [PHP-DI](https://github.com/PHP-DI/PHP-DI) 依赖注入库。
- [FastRoute](https://github.com/nikic/FastRoute) 路由库。
- [Requests](https://github.com/WordPress/Requests) HTTP 客户端库。
- [guzzle](https://github.com/guzzle/guzzle) HTTP 客户端库。
- [saber](https://github.com/swlib/saber) 异步客户端。
- [uuid](https://github.com/ramsey/uuid) uuid 库。
- [hashids](https://github.com/vinkla/hashids) 散列 ID 生成库。
- [laravel](https://github.com/laravel/laravel) PHP 界的 Spring ，功能齐全，就是有点重，服务器要求比其他 PHP 框架高，不然会卡。
- [laravel ui](https://github.com/laravel/ui) laravel ui 库。
- [lumen](https://github.com/laravel/lumen) 基于 laravel 的框架。
- [laravel-admin](https://github.com/z-song/laravel-admin) 基于 laravel 的管理后台模板项目。
- [voyager](https://github.com/thedevdojo/voyager) 基于 laravel 的管理后台模板项目。
- [symfony](https://github.com/symfony/symfony) Web 框架，拆分出很多基础库，ThinkPHP 大量复用它的基础库。
- [symfony dotenv](https://github.com/symfony/dotenv) symfony 环境变量库。
- [symfony cache](https://github.com/symfony/cache) symfony 缓存。
- [dom-crawler](https://github.com/symfony/dom-crawler) HTML、XML 遍历工具库。
- [one](https://github.com/lizhichao/one)  Web 框架
- [CodeIgniter](https://github.com/bcit-ci/CodeIgniter) Web 框架
- [CodeIgniter4](https://github.com/codeigniter4/CodeIgniter4) Web 框架
- [queryphp](https://github.com/hunzhiwange/queryphp) Web 框架
- [tntsearch](https://github.com/teamtnt/tntsearch) 倒排索引库。
- [workerman](https://github.com/walkor/workerman)
- [thinkphp](https://github.com/top-think/framework) Web 框架，很多基础库复用 symfony 的，国内大量专用框架由其扩展而来。
- [think](https://github.com/top-think/think) Web 框架，很多基础库复用 symfony 的，国内大量专用框架由其扩展而来。
- [think-swoole](https://github.com/top-think/think-swoole) thinkphp 的 swoole 适配。
- [think-queue](https://github.com/top-think/think-queue)
- [think-validate](https://github.com/top-think/think-validate)
- [think-worker](https://github.com/top-think/think-worker) ThinkPHP Workerman 扩展
- [think-orm](https://github.com/top-think/think-orm)
- [think-cache](https://github.com/top-think/think-cache)
- [think-migration](https://github.com/top-think/think-migration)
- [think-annotation](https://github.com/top-think/think-annotation)
- [think-testing](https://github.com/top-think/think-testing)
- [think-validate](https://github.com/top-think/think-validate)
- [think-wechat](https://github.com/qiqizjl/think-wechat) easywechat 封装到 thinkphp
- [tadmin](https://github.com/leeqvip/tadmin) 非侵入的 TP 后台开发框架。
- [likeadmin](https://www.likeadmin.cn/) 多语言的框架，PHP 版主打线上开发（就是需要服务器，本地开发部分功能不能使用。）很符合 PHP 开发者的习惯，直接在正式服务器上修改代码。基于 ThinkPHP
- [dompdf](https://github.com/dompdf/dompdf) DOM 转 PDF 的库。
- [jieba-php](https://github.com/fukuball/jieba-php) jieba 中文分词。
- [scws](https://github.com/hightman/scws) 中文分词。
- [VicWord](https://github.com/lizhichao/VicWord) 分词。
- [pcre](https://github.com/composer/pcre) 封装 pcre（preg_*函数）做类型安全。
- [amphp](https://github.com/amphp/amp)
- [amphp http-client](https://github.com/amphp/http-client)
- [amphp parallel](https://github.com/amphp/parallel)
- [amphp mysql](https://github.com/amphp/mysql)
- [php-amqplib](https://github.com/php-amqplib/php-amqplib) RabbitMQ 客户端。
- [Captcha](https://github.com/Gregwar/Captcha) 验证码生成库。
- [phpdotenv](https://github.com/vlucas/phpdotenv) .env 文件处理库。
- [lexer](https://github.com/doctrine/lexer) doctrine 的词法器库。
- [cache](https://github.com/doctrine/cache) doctrine 的缓存库。
- [monolog](https://github.com/Seldaek/monolog) 日志库。
- [PHP_XLSXWriter](https://github.com/mk-j/PHP_XLSXWriter) excel xlsx 文件生成库。
- [simplexls](https://github.com/shuchkin/simplexls) excel xls 文件处理库。
- [PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) excel 处理库。
- [psalm](https://github.com/vimeo/psalm) 静态分析工具，可以分析出函数参数类型错误等问题。
- [PHP-Parser](https://github.com/nikic/PHP-Parser) PHP 写的 PHP 语法分析器。
- [pinyin](https://github.com/overtrue/pinyin) 中文转拼音。
- [pest](https://github.com/pestphp/pest) 测试框架。
- [puphpeteer](https://github.com/rialto-php/puphpeteer) puppeteer 的封装。
- [PHP-SQL-Parser](https://github.com/greenlion/PHP-SQL-Parser) SQL 解析库。
- [canal-php](https://github.com/xingwenge/canal-php) 阿里的 canal 的 PHP 客户端。
- [mqtt](https://github.com/simps/mqtt) MQTT 客户端。
- [php-ast](https://github.com/nikic/php-ast) PHP7 代码转 AST 树。
- [kafka-php](https://github.com/weiboad/kafka-php) kafka 客户端。
- [websocket-php](https://github.com/Textalk/websocket-php) websocket 客户端。
- [php-mysql-replication](https://github.com/krowinski/php-mysql-replication) mysql binlog 数据复制库。
- [easyswoole](https://github.com/easy-swoole/easyswoole) 一个基于 swoole 的框架。
- [swoolefy](https://github.com/bingcool/swoolefy) 一个基于 swoole 的框架。
- [mix](https://github.com/mix-php/mix) 命令行开发框架。
- [parsedown](https://github.com/erusev/parsedown) markdown 处理库。
- [hyperf](https://github.com/hyperf/hyperf) swoole 框架。
- [hyperf nano](https://github.com/hyperf/nano) swoole 轻量框架。
- [hyperf-watch](https://github.com/ha-ni-cc/hyperf-watch) hyperf 自动重启。
- [PHP-FFMpeg](https://github.com/PHP-FFMpeg/PHP-FFMpeg) 封装 ffmpeg 命令行使用，需要安装 ffmpeg 。
- [phpunit](https://github.com/sebastianbergmann/phpunit) 单元测试框架。
- [Medoo](https://github.com/catfan/Medoo) ORM
- [redbean](https://github.com/gabordemooij/redbean) ORM
- [doctrine](https://github.com/doctrine/orm) ORM
- [doctrine lexer](https://github.com/doctrine/lexer) doctrine 的词法器。
- [doctrine cache](https://github.com/doctrine/cache) doctrine 的缓存。
- [easywechat](https://github.com/w7corp/easywechat) 微信公众号 API 第三方 SDK。
- [zanphp](https://github.com/youzan/zanphp) 有赞开源的 PHP web 框架。
- [phpseclib](https://github.com/phpseclib/phpseclib) 安全加密算法库。
- [PaySDK](https://github.com/Yurunsoft/PaySDK) 国内 微信、支付宝 第三方支付 SDK。
- [smarty](https://github.com/smarty-php/smarty) HTML 模板引擎。
- [Twig](https://github.com/twigphp/Twig) HTML 模板引擎。
- [plates](https://github.com/thephpleague/plates) HTML 模板引擎。
- [openapi-sdk-php](https://github.com/aliyun/openapi-sdk-php) 阿里云的 PHP SDK 2.0。
- [openapi-sdk-php-client](https://github.com/aliyun/openapi-sdk-php-client) 阿里云的 PHP SDK 1.0。

## 项目、示例

- [xunsearch](https://github.com/hightman/xunsearch) 专门给 PHP 提供全文搜索的 C 项目。
- [WordPress](https://github.com/WordPress/WordPress)
- [craftcms](https://github.com/craftcms/cms) 一个 CMS 项目。
- [Sylius](https://github.com/Sylius/Sylius) 电商项目。
- [shopxo](https://github.com/gongfuxiang/shopxo) 基于 TP8 的商城项目。
- [pikachu](https://github.com/zhuifengshaonianhanlu/pikachu) 漏洞靶场项目。
- [PHPPHP](https://github.com/ircmaxell/PHPPHP) PHP 里的 PHP VM。
- [think-swoole-demo](https://github.com/xavieryang007/think-swoole-demo) think-swoole 示例。
- [clean-code-php](https://github.com/piotrplenik/clean-code-php) 整洁代码 PHP 示例。
- [game-ddz](https://github.com/sy-records/game-ddz) 使用Hyperf框架开发斗地主游戏
- [workerman-chat](https://github.com/walkor/workerman-chat) 基于 workerman 的聊天室项目。
- [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) 代码嗅探工具，检查语法等，已转移。
- [PHP_CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) 代码嗅探工具，检查语法等。
- [phinx](https://github.com/cakephp/phinx) 数据库迁移框架（提供命令行工具和库）。
- [DVWA](https://github.com/digininja/DVWA) 安全测试，PHP 开发的漏洞靶场。

## 命令规范

PHP 是有一套标准库的，所以最好的命名规范就是保持和 PHP 的标准库一致。
很多 PHP 的代码看着脏乱差的一个原因就是命名规范混乱，加上很多 PHPer 直接复制别人的代码段不修改，就造成了很多公司的 PHP 代码被称作“屎山”。

- 类名 PascalCase
- 类成员方法名 camelCase
- 类成员字段名 camelCase
- 函数名 snake_case
- 局部变量名 camelCase
- 常量名 UPPER_CASE

## FastCGI 与 “线上开发”、“线上调试”

PHP 大部分开发都是基于 FastCGI 的，这是它的优势也是它的劣势。
PHP 很多项目只有一两个人或者长期只有一个人开发，经常会出现一种“线上开发”的情况，即，程序员直接在服务器上改 PHP 代码并调试。
这种“线上开发”、“线上调试”的现象是 PHP 采用 FastCGI 后与大部分编程语言不同的点。
“线上开发”可以极大地舍弃项目管理，让一个人开发得到便利，工作量变少，出活就变多。
这种便利对很多线上紧急问题的解决是有利于 PHP 开发者的，但是对于长期的项目管理却是一种灾难。
很多用 PHP 的开发者，被称之为“野生程序员”的原因，就是这种“线上开发”导致。
大部分的 PHP 项目的代码乱，项目管理更乱的原因也是因为“线上开发”在 PHP 里不仅可行，而且常见。
很多项目只能在线上开发调试，本地部署几乎不可行，缺失太多迁移环境脚本的编写（这节省了大量时间，同时也导致 PHP 开发者不擅长写工程化脚本，没有工程化思维，成为野生程序员。）。
很多 PHP 开发者更是把 工程构建脚本 和 运维部署脚本 混为一谈。
工程构建脚本：常见的例子就是 makefile、gradle 等编译器或者 IDE 关于构建的脚本。(PHP 没有编译过程，可以跳过这个步骤，所以被忽略了，所以普遍 PHP 开发者缺失这方面的能力。)
运维部署脚本：更多的是文件复制到服务器，FTP、SFTP、SSH 等服务器操作命令。（因为可以线上调试，所以PHP也可以不要这个步骤，毕竟代码直接在线上改，同样 PHP 开发者也很缺失这方面的能力。）
因为这两方面都不熟悉，所以就会把它们混淆。就像很多 PHP 开发者不明白什么是单元测试的情况就会说：“单元测试是测试员写的，他们只会点点点，写点测试代码干点活合理。”。
“线上开发”还会导致没有编写文档或者README的习惯，毕竟构建脚本都懒得写，文档这种就更是没必要了，只有专注出活才是重点。
所以 PHP 开发的项目普遍效果都要比其他语言的差一些，很容易代码越改越乱各种 BUG 难以排查。
PHP 大部分都是 Web 项目，这也是“线上开发”可行的原因，Web 靠日志排查问题（虽然很多 PHP 开发者不看日志，甚至故意删掉框架原有的日志功能来减少项目占用空间，他们靠网页打印接口返回调试。），所以很少用 XDEBUG 这种断点调试工具。
这也是 PHP 开发团队为什么管服务器的人会权限比较大，看起来比较能解决问题的原因。他把持服务器就更能解决更多问题（很多问题还可能是他乱改云服务商后台的配置导致的。），很多问题也只好跑去线上解决。

## 常见问题

### SSL/HTTPS CA 证书过旧

到 [https://curl.se/ca/cacert.pem](https://curl.se/ca/cacert.pem) 下载最新的证书，
然后修改 php.ini 文件的下面两个配置指向这个文件（全路径）。

```ini
[curl]
;curl.cainfo =

[openssl]
;openssl.cafile=
```