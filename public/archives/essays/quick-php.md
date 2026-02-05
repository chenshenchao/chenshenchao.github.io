# PHP 速查

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

## Composer

```bash
# 安装依赖，忽略 ext-* 的 C 扩展
# 一些用 docker 做开发环境时，依赖只支持 Linux 的比如 swoole 可以在 Windows 安装依赖。
composer install --ignore-platform-reqs

# 强制回退到指定版本，把依赖都回退了。
composer require monolog/monolog:1.25.0 --with-all-dependencies
```

### 常见包和框架

- [uuid](https://github.com/ramsey/uuid) uuid 库。
- [laravel](https://github.com/laravel/laravel) PHP 界的 Spring ，功能齐全，就是有点重，服务器要求比其他 PHP 框架高，不然会卡。
- [symfony](https://github.com/symfony/symfony) Web 框架，拆分出很多基础库，ThinkPHP 大量复用它的基础库。
- [tntsearch](https://github.com/teamtnt/tntsearch) 倒排索引库。
- [symfony/dotenv](https://github.com/symfony/dotenv) symfony 环境变量库。
- [thinkphp](https://github.com/top-think/framework) Web 框架，很多基础库复用 symfony 的，国内大量专用框架由其扩展而来。
- [likeadmin](https://www.likeadmin.cn/) 多语言的框架，PHP 版主打线上开发（就是需要服务器，本地开发部分功能不能使用。）很符合 PHP 开发者的习惯，直接在正式服务器上修改代码。

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