# LCD

## ST7735

基于 SPI 驱动：

- SLC: SPI 时钟线
- MOSI: SPI MOSI
- CS: SPI 片选，低使能，高禁用。
- DC: Data/Command 切换线，高：数据，低：命令
- RST: 低：重启，正常情况下保持高。

- 写命令：CS↓,DC↓，SPI→，DC↑，CS↑
- 写数据：CS↓,DC↑，SPI→，DC↓，CS↑

- ST7735_CASET: Colum 设置，0x2A, xh, xl, wh, wl
- ST7735_RASET：Row 设置，0x2B, yh, yl, hh, hl
- ST7735_RAMWR: RAM 写, 0x2C, 数据量由 ST7735_CASET，ST7735_RASET 指定的窗口大小。

