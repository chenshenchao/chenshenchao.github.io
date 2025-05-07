# Lazarus 速查

- *.lpi Lazarus 项目文件（XML 源码文件）
- *.lpr Lazarus 项目主要源码（Pascal 源码文件）
- *.lps Lazarus 项目文件（XML 源码文件）
- *.lfm Lazarus 窗口定义文件（一种自定义的结构语言 源码文件）
- *.pas Free Pascal 源码文件（Pascal 源码文件）

## 重构代码

如果你要改名 TForm1 或者 TFrame1 这种生成的代码，需要用 vscode 或者其他可以搜索多个文件的工具，搜索后改掉名字，因为 Lazarus 并不能很好的帮你修改这些名字。

单元名 和 变量名 要注意不要一样，会报重定义的错。
如果你直接通过 Form 设计器的 Name 修改就会导致变成一样的，这样会导致报错。（原因是 IDE 粗暴地直接批量匹配修改了。）

通过菜单 “项目” 》 “项目查看器” 可以查看关联的文件，如果文件有不对的，会导致编译错误。（不得不吐槽，早期的这种设计太差，VS C# 早期也是这种设计，在进入 .NET Core 时代后就把 csproj 简化了，让构造工具自己扫描，减少了这方面的问题）

## 项目配置

- “DPI awarenes” DPI 感知，能够根据 DPI 变化调整大小。

## 软件包

### 常用软件包

- AnchorDocking 用来把四散的 IDE 窗口合并到一起。
- AnchorDockingDsgn 用来把四散的 IDE 窗口合并到一起。

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
