# MonoGame 速查

- [MonoGame 源码](https://github.com/MonoGame/MonoGame)
- [MonoGame.Samples 示例](https://github.com/MonoGame/MonoGame.Samples)

游戏引擎。

## 项目结构

- .config 目录里面有 dotnet-tool.json 没有这个文件 VS 无法打开 *.mgcb 文件编辑器，而且构造会失败报错。
- Content 目录里面有 Content.mgcb 资源文件靠这个管理，MonoGame.Content.Builder.Task 就是用于通过这个文件生成资源的。

## 常用库

- [MonoGame-Extended](https://github.com/MonoGame-Extended/MonoGame-Extended) 扩展库，字体、动画等。
- [FontStashSharp](https://github.com/FontStashSharp/FontStashSharp) 字体加载库。
- [Gum](https://github.com/vchelaru/Gum) 游戏 UI 设计工具和库，支持 MonoGame、WPF等。
- [GeonBit.UI](https://github.com/RonenNess/GeonBit.UI) UI 库。
- [VelcroPhysics](https://github.com/Genbox/VelcroPhysics) 物理引擎库。

### GUM

Gum 的做法类似 WinForms、Delphi 这类，通过拖拽得到一个界面文件，然后通过这个界面文件生成对应语言的代码，只是 WinForms、Delphi 这些生成的代码被放在比较隐蔽的临时文件里面（这也是这类框架的问题很多 BUG 的原因，临时文件被某个进程锁住，导致代码文件更新不了，界面是旧的。）

#### 代码生成

选中组件后，右下角有个 Code 的标签，选中有配置表单。

- Code Project Root：这个一般写 ../../ 后会自动变成绝对路径。（示例都是放在 Content 里，所以几乎都可以写 ../../）
- Output Library：这个新的项目都是选 MonoGame + Forms，因为其他项带有“废弃”字样。

### GeonBit.UI

注：有个bug，GeonBit.UI.Examples 引用同个仓库的 GeonBit.UI 就没问题，但是使用 Nuget 包的就会找不到 content file 报错，这个库估计没考虑发布情况，只管开发库的时候示例通过，所以路径有问题。如果要用这个库，目前建议直接复制这个 UI 库的源码，然后把 GeonBit.UI.Examples 改成目标游戏。

## 工具

- [Bitmap Font Generator](https://www.angelcode.com/products/bmfont/) 生成 Bitmap 字体工具。

