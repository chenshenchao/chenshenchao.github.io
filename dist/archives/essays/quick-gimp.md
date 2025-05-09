# GIMP 速查

## 蒙版

通过给图层添加蒙版，可以做透明效果，蒙版其实就是透明通道，每个像素的最大值代表原色，最小值就是完全透明。

## 通道

## 脚本

GIMP 使用 lisp 作为脚本语言。

```list
; scripts/demo-func.scm
; 注册
(script-fu-register
    "demo-func"; 函数名
    "Demo"; 菜单标签
    "yet a demo."; 描述
    "Chen Shen Chao"; 作者
    "copyright 2025, Chen Shen Chao"; 版权
    "April 11 2025"; 创建日期
    "";
    SF-STRING "Text" "Text Box"; 字符串参数
    SF-FONT "Font" "Charter"; 字体参数
)

; 注册菜单 
(script-fu-menu-register "demo-func" "<Image>/Demo")

; 实现
(define (demo-func text font)
    (gimp-image-list)
)
```