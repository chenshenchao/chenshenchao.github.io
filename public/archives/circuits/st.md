# ST 意法半导体

ST 的 M 系列单片机可以说是市面上使用最多的单片机了。

## 命名

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

## 常用单片机

### STM32F103

Cortex-M3，无 FPU。

- STM32F103C8T6：LQFP48, 72MHz, 64 KB Flash，10 KB SRAM
- STM32F103C6T6: LQFP48, 32 KB Flash，20 KB SRAM

### STM32F401

Cortex-M4，有 FPU、DSP。

- STM32F401RCT6: LQFP64,  84MHz，256 KB Flash，64 KB SRAM，市面上有很多拆机便宜货，卖的比 STM32F103C8T6 便宜。
