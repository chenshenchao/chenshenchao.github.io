# Lazarus 速查

- *.lpg Lazarus 项目组文件（XML 源码文件）
- *.lpi Lazarus 项目文件（XML 源码文件）
- *.lpr Lazarus 项目主要源码（Pascal 源码文件）
- *.lps Lazarus 项目文件（XML 源码文件）
- *.lfm Lazarus 窗口定义文件（一种自定义的结构语言 源码文件）
- *.lrs Lazarus 资源文件（Pascal 源码文件，数据被翻译成字节字面量数组，可以被 include 到源码里提供资源。）
- *.pas Free Pascal 源码文件（Pascal 源码文件）

## 重构代码

如果你要改名 TForm1 或者 TFrame1 这种生成的代码，需要用 vscode 或者其他可以搜索多个文件的工具，搜索后改掉名字，因为 Lazarus 并不能很好的帮你修改这些名字。

单元名 和 变量名 要注意不要一样，会报重定义的错。
如果你直接通过 Form 设计器的 Name 修改就会导致变成一样的，这样会导致报错。（原因是 IDE 粗暴地直接批量匹配修改了。）

通过菜单 “项目” 》 “项目查看器” 可以查看关联的文件，如果文件有不对的，会导致编译错误。（不得不吐槽，早期的这种设计太差，VS C# 早期也是这种设计，在进入 .NET Core 时代后就把 csproj 简化了，让构造工具自己扫描，减少了这方面的问题）

## 项目配置

- “DPI awarenes” DPI 感知，能够根据 DPI 变化调整大小。

构建模式创建后可以提供不同的构建设置，默认 Default 构建模式。

### 添加与重写

可以添加编译器命令参数等。

添加自定义预编译宏：“Custom” 加入 -dYOUR_MACRO 就加入了 YOUR_MACRO 宏。
添加后每个构建模式都有个单选框，勾选就是在此构建模式下启用这个宏。


## 软件包

### 常用软件包

- AnchorDocking 用来把四散的 IDE 窗口合并到一起。
- AnchorDockingDsgn 用来把四散的 IDE 窗口合并到一起。
- pas2jsdsgn 转换 Pascal 成 JS 的 pas2js 库的设计器。
- DCPcrypt 一个加密算法包。
- [CEF4Delphi](https://github.com/salvadordf/CEF4Delphi) 一个跨平台的 CEF WebView 的封装，（在线软件包可下载，依赖 DCPcrypt）。
- [WebView4Delphi](https://github.com/salvadordf/WebView4Delphi) 一个 Windows 下 WebView2 的封装，（在线软件包可下载）。

### 自定义软件包

菜单 “软件包” 》 “新建软件包”

要扩展自定义控件，并让控件可以被 IDE 识别，就必须把控件定义到一个软件包中，在让 IDE 安装此软件包。
（不得不说，这样调试很麻烦）

1. 要设计稿起效，要不断重新编译 IDE
2. 如果只是运行时，可以直接点调试，会更新。
3. 修改后项目一直报错，可能是缓存了修改的组件，需要手动删除源码里用到改动组件的代码，清理干净。

```pascal
{ 每个单元的 Register 过程会被 IDE 自动识别，可以这里注册组件。 }
procedure Register;
begin
  RegisterComponents('CustomControls', [TMyCustomControl]);
end; 
```

### [WebView4Delphi](https://github.com/salvadordf/WebView4Delphi)

- 需要确保运行目录下有 WebView2Loader.dll （这个官方源码里面有bin32和bin64两个版本）
- 按照官方源码的示例 demos 里面把各种事件做处理，不然会有各种问题。

注：
1. TWVWindowParent 只支持 alClient 布局，无论你改什么他都是这个布局，所以设计的时候最好调成这个布局，才能保证一致性。
2. TWVBrowser 的 "BrowserExecPath" 和 "UserDataFolder" 属性最好不要用，发布会有问题，建议通过 GlobalWebView2Loader 设置。

这个需要自行下载 WebView2 的发行版本，然后放到指定目录下。

## [pas2js](https://wiki.freepascal.org/pas2js)

- [下载](https://getpas2js.freepascal.org/)解压，不要把 bin 目录添加到 PATH 里面。
- 确保有装 Pas2Js 软件包，然后打开 “工具” 》 “选项” 》 “Pas2Js" 配置，把 pas2js.exe 的路径设置成刚下载的 bin/pas2js.exe。
- 如果是 Electron 项目，可以在项目中安装 Electron 然后同样在 “选项” 》 “Pas2Js” 中配置 node_modules\electron\dist\electron.exe。

注：Windows 下 Lazarus 是有把 pas2js.exe 一起分发的，如果 Lazarus 安装目录下 fpc/**/bin 目录添加到 PATH 会导致定位到 pas2js.exe 但是没有配套文件而导致问题。

### 基于 Pas2Js 的 Electron 项目。

其实就是把 Pascal 翻译成 JS ，然后让你用 node 去执行 Electron.说白了，就是在 Electron 原有的开发流程之前多了一步“把 Pascal 翻译成 JS”。
而因为多了这一步，导致项目复杂了数倍，一个简单的 Electron 项目只要 4个文件，而这个就导致文件多出一堆超过 10个以上。
而且各种因为 Pascal 翻译 JS 的问题，导致项目麻烦。
而最应该有的自动打包 Electron 的功能，没有。。。。。全部手动处理 Electron 相关。。。。
这种项目没有太大意义，会 Electron 的直接用 Electron，不会 Electron 的各种问题，估计也解决不了。

```bat
@rem 配置 Electron 阿里源
set electron_mirror=https://npmmirror.com/mirrors/electron/

@rem 安装 Electron
npm i -D electron
```