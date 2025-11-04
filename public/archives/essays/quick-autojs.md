# AutoJS 速查

AutoJs 2019 年停止更新开源并闭源，社区 fork 出分支为 AutoX.js 并维护。
[AutoX GitHub 仓库](https://github.com/aiselp/AutoX)
自动化方面没有 appium 那么专业，开发工具齐全，多语言等特性，但是 AutoXjs 有个优势，能打包成 APP 发布就挺适合做小工具的。

注：如非只是做自动化，还是使用 appium 而不要用 autojs 社区环境、文档等差太多。如果要写 UI 界面打包成 APP 发布，那么 autoxjs 才能满足需求。

## UI 界面

## 控件操作

```js
const id = uiObject.id();
console.log(id, uiObject.id()); // 大概率会输出2个不同的值，很奇怪赋值后就出错了。

const className = uiObject.className();
console.log(className, uiObject.className()); // 同 id 一样，也有这个问题。
```

## 开发流程

### 移动端开发

1. [下载](https://github.com/aiselp/AutoX/releases) apk 并安装到要控制的手机。
2. 打开 AutoX app 并在菜单中开启 “无障碍服务” 和 “悬浮窗”、“USB 调试”。
3. 打开要操作的目标 app ,通过悬浮窗分析组件布局等，得到要操作的组件的定位条件进行脚本编写。
4. 执行脚本并调试。

### PC 端开发

1. 先完成移动端开发的步骤，并 PC 端按 [示例](https://github.com/aiselp/AutoX/tree/setup-v7/app/src/main/assets/sample) 搞个项目出来。
2. 安装 VSCODE 插件 [Auto.js-Autox.js-VSCodeExt](https://marketplace.visualstudio.com/items?itemName=aaroncheng.auto-js-vsce-fixed)
3. 参考文档里的，大概如下：
4. Step 1: Ctrl+Shift+P 查 autojs start all server 开启所有服务。
5. Step 2: 1. 无线连接，把 Step 1 的 IP 在手机端菜单的 “连接电脑” 输入(或者 Ctrl+Shift+P show qr code 出现二维码扫码)
6. Step 2: 2. USB 调试连接，确保类似普通安卓开发那样 adb 的工作方式正常。
7. Step 3: VS code 编辑，F5 调试。

## 打包 APP

AutoXjs 可以写 UI 界面，并打包成 APP 发布。

### 打包单个脚本

脚本列表右边 三个点 图标点开可以打包，点打包填表开始打包即可。

### 项目创建

1. 在 AutoXjs App 里 有个浮动按钮 + 可以添加文件、项目等，选创建项目。
2. 填完表后就可以创建项目开始开发。

```json
{
    "name": "AutoX 打包 Demo",
    "main": "main.js",
    "ignore": [
        "build"
    ],
    "packageName": "com.autox.demo",
    "versionName": "1.0.0",
    "versionCode": 1
}
```

1. 编写好已有的项目，和安装好 VSCode 插件，见上开发流程。
2. 1. Ctrl + Shift + P 搜索 “autoxjs 保存项目到设备”，把脚本发送到手机。（注：VSCode 插件 只能识别当前根目录的 project.json 文件）
2. 2. 可以选中文件右键菜单传。

