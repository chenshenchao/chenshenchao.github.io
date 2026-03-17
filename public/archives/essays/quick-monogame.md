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
- [Apos.Gui](https://github.com/Apostolique/Apos.Gui) 极度简洁（纯文本）的 UI 库。
- [VelcroPhysics](https://github.com/Genbox/VelcroPhysics) 物理引擎库。

### GUM

Gum 的做法类似 WinForms、Delphi 这类，通过拖拽得到一个界面文件，然后通过这个界面文件生成对应语言的代码，只是 WinForms、Delphi 这些生成的代码被放在比较隐蔽的临时文件里面（这也是这类框架的问题很多 BUG 的原因，临时文件被某个进程锁住，导致代码文件更新不了，界面是旧的。）

代码形式开发支持 *.spritefont 的方式使用字体。
可拖拽工具目前只支持 *.fnt 的方式使用字体。

#### 代码生成

选中组件后，右下角有个 Code 的标签，选中有配置表单。

- Code Project Root：这个一般写 ../../ 后会自动变成绝对路径。（示例都是放在 Content 里，所以几乎都可以写 ../../）
- Output Library：这个新的项目都是选 MonoGame + Forms，因为其他项带有“废弃”字样。

#### states 状态

这个类似 CSS伪类 或者 动画系统的帧状态，可以自定义，用于事件或动画的状态切换。
Default 状态对应组件的默认值，选中其他状态后可以修改组件及其子组件的值，这些值会随着状态改变而改变。

#### Behaviors 行为

行为必须是 组件（Components）才能编辑，幕（Screens）里的组件不能修改其行为。

### GeonBit.UI

注：有个bug，GeonBit.UI.Examples 引用同个仓库的 GeonBit.UI 就没问题，但是使用 Nuget 包的就会找不到 content file 报错，这个库估计没考虑发布情况，只管开发库的时候示例通过，所以路径有问题。如果要用这个库，目前建议直接复制这个 UI 库的源码，然后把 GeonBit.UI.Examples 改成目标游戏。

## 工具

- [Bitmap Font Generator](https://www.angelcode.com/products/bmfont/) 生成 Bitmap 字体工具。

## 字体/字符

精灵字符 *.spritefont 文件是一种 xml 文件。
配置这种文件后，编译时会自动根据这个配置去生成字符贴图，手写 UI 代码可以用 *.spritefont 开发。
如果用 GUM 的可视化工具开发则仍需 BMFont 生成贴图并配合导入 *.fnt 使用。
在设置 CharacterRegions 时，如果设置的字符比较多，编译耗时越久。
还要考虑字体是否有版权，所以建议使用 思源黑体。
由于此功能必须使用系统注册的字体，所以需要注册 思源黑体 到系统字体里。

- 微软雅黑：Microsoft YaHei
- 思源黑体：Source Han Sans
- 思源宋体：Source Han Serif

```xml
<?xml version="1.0" encoding="utf-8"?>
<XnaContent xmlns:Graphics="Microsoft.Xna.Framework.Content.Pipeline.Graphics">
  <Asset Type="Graphics:FontDescription">
    <FontName>Microsoft YaHei</FontName>
    <Size>18</Size>
    <Spacing>0</Spacing>
    <UseKerning>true</UseKerning>
    <Style>Regular</Style>
    <CharacterRegions>
      <CharacterRegion>
        <Start>32</Start>
        <End>127</End>
      </CharacterRegion>
      <CharacterRegion>
        <Start>12288</Start>
        <End>12351</End>
      </CharacterRegion>
      <CharacterRegion>
        <Start>19968</Start>
        <End>40959</End>
      </CharacterRegion>
      <CharacterRegion>
        <Start>65280</Start>
        <End>65519</End>
      </CharacterRegion>
    </CharacterRegions>
  </Asset>
</XnaContent>
```