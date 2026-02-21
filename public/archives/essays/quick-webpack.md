# [草稿] Webpack 速查

多年前，Webpack 还是比 gulp、grunt 这些脚本执行框架要先进的，当时可谓风头正盛，但是随着之后 rollup 系的 vite 出来后渐渐式微，这里仅做留存多年前残留的一些信息，因为已经过去八九年了，正确性不太可考。

## 插件

- [webpack-iconfont-plugin-nodejs](https://github.com/hzsrc/webpack-iconfont-plugin-nodejs) SVG 生成字体图标 ttf,woff2,woff,eot,svg 插件。
- [iconfont-webpack-plugin](https://github.com/jantimon/iconfont-webpack-plugin)  SVG 生成字体图标插件。

## 配置

webpack.config.js 时代还是 CommonJs 的配置。

### 简单示例

一个简单的项目构建示例配置：

```js
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSCSS = new ExtractTextPlugin('css/[name].min.css')

module.exports = {
    entry: {
        styles: path.resolve(__dirname, 'main.coffee')
    },
    output: {
        filename: 'js/[name].min.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }, {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 'es2015' ],
                            ignore: [ 'jsencrypt' ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ extractSCSS ]
};
```

### 构建时扫描文件生成常量，作为运行时路由的配置。

这个配置会扫描指定的目录里面的源码文件自动生成路由，从而减少手工添加路由的麻烦。

```js
const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

class Setting {
    constructor() {
        this.entry = {};
        this.output = {
            filename: '[name]/script.js',
            path: path.resolve(__dirname, 'public'),
        };
        this.devtool = "source-map";
        this.performance = { hints: false };
        this.watchOptions = {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000
        };
        this.module = {
            rules: [{
                test: /\.svg$/,
                loader: 'raw-loader',
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            }, {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                }]
            }]
        };
        this.plugins = [
            new MiniCssExtractPlugin({
                filename: '[name]/style.css'
            }),
        ];
    }

    /**
     * 
     * @param {*} folder 
     * @param {*} name 
     */
    addView(folder, name) {
        let setting = {
            inject: false,
            template: path.resolve(__dirname, folder, name, 'main.html'),
            filename: path.resolve(__dirname, 'view', `${name}.html`),
            minify: true
        };
        let scriptPath = path.resolve(__dirname, folder, name, 'script.js');
        if (fs.existsSync(scriptPath)) {
            let stylePath = path.resolve(__dirname, folder, name, 'style.scss');
            this.entry[name] = scriptPath;
            setting.script = `/${name}/script.js`;
            if (fs.existsSync(stylePath)) {
                setting.style = `/${name}/style.css`;
            }
        }
        this.plugins.push(new HtmlWebpackPlugin(setting));
    }

    /**
     * 
     */
    addPage(pagesPath, name) {
        let folderPath = path.resolve(pagesPath, name);
        let mainPath = path.resolve(folderPath, 'main.html');
        if (fs.existsSync(mainPath)) {
            this.addView('pages', name);
        }
        for (let child of fs.readdirSync(folderPath)) {
            let childPath = path.resolve(folderPath, child);
            let stat = fs.statSync(childPath);
            if (stat.isDirectory()) {
                this.addPage(pagesPath, `${name}/${child}`);
            }
        }
    }

    /**
     * 
     */
    addPages() {
        let pagesPath = path.resolve(__dirname, 'pages');
        for (let name of fs.readdirSync(pagesPath)) {
            let filePath = path.resolve(pagesPath, name);
            let stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                this.addPage(pagesPath, name);
            }
        }
    }

    /**
     * 
     */
    addPanels() {
        let panelsPath = path.resolve(__dirname, 'panels');
        for (let name of fs.readdirSync(panelsPath)) {
            let filePath = path.resolve(panelsPath, name);
            let stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                this.addView('panels', name);
            }
        }
    }
}

const setting = new Setting();
setting.addPanels();
setting.addPages();
module.exports = setting;
```
