# [草稿]Ruby 速查

- [ruby 源码](https://github.com/ruby/ruby)

Ruby 是由日本程序员松本行弘开发的编程语言，最为大家熟知的 Ruby 项目就是 GitHub 和 RPG Maker 了。
Ruby 的名字来源于效仿 Perl 用 “珍珠（Pearl）”起名，所以就叫“红宝石（Ruby）”

## 常用库

- [dotenv](https://github.com/bkeepers/dotenv) .env 文件加载。

## 项目、示例

- [puma](https://github.com/puma/puma) web 服务器。
- [chef](https://github.com/chef/chef) 自动化配置服务（云服务商创建各种虚拟容器，指定什么系统，多少CPU，多少内存此类）
- [puppet](https://github.com/puppetlabs/puppet) 自动化配置服务

## 包管理

Ruby 的包管理是 gem。

```bash
# 安装 rails ，可指定版本
gem install rails
gem install rails --version 5.0

# 列举本地安装
gem list
# 列举 RubyGems.org 上的所有可用 Gem
gem list -r
# RubyGems.org 上搜索 html 
gem search -r html
```
