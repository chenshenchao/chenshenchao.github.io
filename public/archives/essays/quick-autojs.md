# [草稿]AutoJS 速查

AutoJs 2019 年停止更新开源并闭源，社区 fork 出分支为 AutoX.js 并维护。
[AutoX GitHub 仓库](https://github.com/aiselp/AutoX)

注：如非必要，还是使用 appium 而不要用 autojs 社区环境、文档等差太多。

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
