# PHP 速查

## Composer

```bash
# 安装依赖，忽略 ext-* 的 C 扩展
# 一些用 docker 做开发环境时，依赖只支持 Linux 的比如 swoole 可以在 Windows 安装依赖。
composer install --ignore-platform-reqs

# 强制回退到指定版本，把依赖都回退了。
composer require monolog/monolog:1.25.0 --with-all-dependencies
```
