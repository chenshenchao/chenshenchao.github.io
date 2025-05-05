# Lazarus 速查

- *.lpi Lazarus 项目文件（XML 源码文件）
- *.lpr Lazarus 项目主要源码（Pascal 源码文件）
- *.lps Lazarus 项目文件（XML 源码文件）
- *.lfm Lazarus 窗口定义文件（一种自定义的结构语言 源码文件）
- *.pas Free Pascal 源码文件（Pascal 源码文件）

## 重构代码

如果你要改名 TForm1 或者 TFrame1 这种生成的代码，需要用 vscode 或者其他可以搜索多个文件的工具，搜索后改掉名字，因为 Lazarus 并不能很好的帮你修改这些名字。

通过菜单 “项目” 》 “项目查看器” 可以查看关联的文件，如果文件有不对的，会导致编译错误。（不得不吐槽，早期的这种设计太差，VS C# 早期也是这种设计，在进入 .NET Core 时代后就把 csproj 简化了，让构造工具自己扫描，减少了这方面的问题）

## 项目配置

- “DPI awarenes” DPI 感知，能够根据 DPI 变化调整大小。

## 软件包

- AnchorDocking 用来把四散的 IDE 窗口合并到一起。
- AnchorDockingDsgn 用来把四散的 IDE 窗口合并到一起。
