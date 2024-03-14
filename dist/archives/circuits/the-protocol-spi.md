# [草稿]SPI

全双工

CS  片选，从机被拉低时启用
CLK 时钟
MISO(master input slave output) ,从机设备一般标记为  DO(data output)
MOSI(master output slave input) ,从机设备一般标记为  DI(data input)

## Dual SPI

半双工 双倍速度, D0 D1 都要么一起为 output 要么一起做 input ,所以速度是双倍，但是不能同时输入输出。

CS
CLK
D0
D1

## Quad SPI

半双工 四倍速度， 同 Dual ,只是多了2个线，速度翻倍。

CS
CLK
D0
D1
D2
D3
