# [草稿] CoffeeScript 速查

CoffeeScript 我是八九年前的时候在搞的，现在 CoffeeScript 可以说没落了，这里仅保留当年留存的一些东西。

## Webpack 配置

那个时候 Webpack 是主流，CoffeeScript 也才刚刚兴起。
这是基于 Webpack 构建项目的配置：

```coffee
path = require 'path'
ExtractTextPlugin = require 'extract-text-webpack-plugin'
extractSCSS = new ExtractTextPlugin 'css/[name].min.css'

module.exports =
    entry:
        styles: path.resolve __dirname, 'main.coffee'
    output:
        filename: 'js/[name].min.js'
        path: path.resolve __dirname, 'public'
    module:
        rules: [
            {
                test: /\.scss$/
                use: extractSCSS.extract {
                    fallback: 'style-loader'
                    use: [
                        'css-loader'
                        'sass-loader'
                    ]
                }
            }
            {
                test: /\.coffee$/
                use: 'coffee-loader'
            }
        ]
    plugins: [
        extractSCSS
    ]
```