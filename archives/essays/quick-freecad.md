# FreeCAD 速查

### 刻字

1. 【Draft】创建 ShapeString（中文要自己指定字体，自己下个思源黑体。字体文件不要太大，会卡死。）
2. 【Part Design】调整该 ShapeString 和要雕刻物体的位置。（把 ShapeString 当作草图调整）
3. 【Part Design】右键，转移至实体，选择要雕刻的物体。
4. 【Part Design】凹坑（把这个 ShapeString 当作草图就是）

### 刻图

1. “文件”->“导入”,选择 SVG 文件,选 ImportSVG
2. 导入后是一堆对象，【Draft】选中所有对象“将草稿（Draft）绘制草图（Sketch）”生成草图
3. 删除导入的对象，之后就是和一般使用草图的方法一样了。

### 草图到面

因为草图只能是平面，所以这个最后出来的是一个扁平的曲面物体。

1. 需要安装插件“Curves Workbench”
2. 【Curves】选择曲面，SketchOnSurface 之后在草图内绘制的图形会投射到曲面作为一个物体。
3. 调整这个物体的参数。

### [投射到面](https://wiki.freecad.org/Part_ProjectionOnSurface)

因为草图只能是平面，所以这个最后出来的是一个扁平的曲面物体。

1. 要有 2个物体，然后摆准角度，【Part】ProjectionOnSurface 就可以投射一个影子到物体上。

## 扩展

因为墙，所以要下载需要梯子或国内镜像。代理无效，要用仓库镜像。

清华源：https://mirror.tuna.tsinghua.edu.cn/github-release/FreeCAD/FreeCAD/


