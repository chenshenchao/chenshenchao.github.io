# [草稿]GigaDevice 兆易创新

- [www.gigadevice.com](https://www.gigadevice.com/) 兆易集团官网，下载东西要注册。
- [www.gd32mcu.com](https://www.gd32mcu.com/) 兆易 MCU 相关，下载不用注册。

## 命名

兆易创新的命名规则几乎沿用了意法半导体的。

系列与型号（第5-8位）：

- E230 Cortex-M23
- F103 Cortex-M3
- F350 Cortex-M4


封装（第8位）：

- F 20pin, TSSOP20, LGA20
- G 28pin, QFN28
- K 32pin, LQFP32, QFN32
- T 36pin, QFN36
- C 48pin, LQFP48, QFN48
- R 64pin, LQFP64, QFN64
- V 100pin, LQFP100
- Z 144pin, LQFP144, BGA144
- I 176pin, BGA176

封装（第10位）：

- P TSSOP
- U QFN
- T LQFP
- V LGA
- H BGA
- S SOIC

FLASH 容量（第9位）：

- 4 16KB
- 6 32KB
- 8 64KB
- B 128KB
- C 256KB

温度等级（第11位）：

- 6 工业级（-40°C ~ 85°C）
- 7 （-40°C ~ 105°C）

## Embedded Builder

兆易基于 Eclipse 开发的 IDE 。

## keil 或 IAR 

下载对应的支持包，会有 keil 和 IAR 的插件安装包。

- GD32E23x Addon 

## 常用 MCU 

### GD32E230

内核：ARM Cortex-M23（支持 MPU 内存保护，无 FPU）
最高主频：72 MHz，性能达 55 DMIPS；采用 55nm 低功耗工艺

- GD32E230F4P6: TSSOP20, 16 KB Flash，4 KB SRAM
- GD32E230F6P6: TSSOP20, 32 KB Flash，6 KB SRAM
- GD32E230F8P6: TSSOP20, 64 KB Flash，8 KB SRAM
- GD32E230G6U6: QFN28, 32 KB Flash，6 KB SRAM
- GD32E230K8U6: QFN32, 64 KB Flash，8 KB SRAM
- GD32E230K8T6: LQFP32, 64 KB Flash，8 KB SRAM
- GD32E230C8T6: LQFP48, 64 KB Flash，8 KB SRAM

### GD32F350

Cortex-M4 内核 108MHz

- GD32F350G8U6: QFN28, 64KB Flash，8KB SRAM
- GD32F350K8U6: QFN32, 64KB Flash，8KB SRAM

### GD32F103

Cortex-M3 内核 108MHz

- GD32F103C8T6: LQFP48, 64 KB Flash, 20 KB SRAM
