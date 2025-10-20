# PHP 速查

## Composer

```bash
# 安装依赖，忽略 ext-* 的 C 扩展
# 一些用 docker 做开发环境时，依赖只支持 Linux 的比如 swoole 可以在 Windows 安装依赖。
composer install --ignore-platform-reqs

# 强制回退到指定版本，把依赖都回退了。
composer require monolog/monolog:1.25.0 --with-all-dependencies
```

### 常见包和框架

- [laravel](https://github.com/laravel/laravel) PHP 界的 Spring ，功能齐全，就是有点重，服务器要求比其他 PHP 框架高，不然会卡。
- [symfony](https://github.com/symfony/symfony) Web 框架，拆分出很多基础库，ThinkPHP 大量复用它的基础库。
- [thinkphp](https://github.com/top-think/framework) Web 框架，很多基础库复用 symfony 的，国内大量专用框架由其扩展而来。
