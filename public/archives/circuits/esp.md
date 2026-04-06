# [草稿]ESP

- [esptool](https://github.com/espressif/esptool) 烧录、配置和交互的串行工具。
- [esp-serial-flasher](https://github.com/espressif/esp-serial-flasher) 下载器开发，烧录库。
- [ESP AT](https://github.com/espressif/esp-at) 把 ESP 作为一个外设的项目，主控 MCU 通过 AT 指令交互。
- [ESP IDF 源码](https://github.com/espressif/esp-idf) IDF 只支持 ESP32 开发，不支持早期的 ESP8266EX 等芯片。
- [vscode-esp-idf-extension](https://github.com/espressif/vscode-esp-idf-extension) VSCODE IDF 插件。
- [esp32-camera](https://github.com/espressif/esp32-camera) IDF 的相机库。
- [EsptouchForAndroid](https://github.com/EspressifApp/EsptouchForAndroid) EspTouch 安卓项目，给单片机配置 WIFI 密码。

## 常用库

- [ESP RS](https://github.com/esp-rs) 用 rust 开发 ESP 的技术栈组织。
- [espup](https://github.com/esp-rs/espup) 类似 rustup 的 esp 工具。
- [espflash](https://github.com/esp-rs/espflash) rust 开发的烧录工具，类似 esptool.py

## ESP32

- [mdk](https://github.com/cpq/mdk) ESP32/ESP32C3 独立 IDF 的裸机 SDK。
- [esputil](https://github.com/cpq/esputil) C 开发的第三方的 ESP32 烧录工具。

### ESP32-P 系列

### ESP32-C 系列

- ESP32-C6:
- ESP32-C61:
- ESP32-C5: 
- ESP32-C3:
- ESP8684: 这颗芯片属于 ESP32-C2


### ESP32-H 系列

## 旧系列：ESP8089、ESP8266EX、ESP8285

这几款 MCU 一般会提供 AT 固件，变成其他 MCU 的串口外设被使用。
后来乐鑫不愿再走这种 MCU 成为外设的路线，所以这些芯片慢慢的就停产了。
这几款芯片并非 ESP32 系列的，所以得不到 ESP-IDF 的支持，技术栈的另外的一套。
差不多定位的 ESP8684 是属于 ESP32-C 系列的，也推荐用这款芯片替代这几款老芯片。

- [ESP8266_RTOS_SDK](https://github.com/espressif/ESP8266_RTOS_SDK) IDF 风格的 RTOS

### ESP8285

| 模式           | CH_PD(EN) | RST | GPIO15 | GPIO0 | GPIO2 | TXD0 |
| -------------- | --------- | --- | ------ | ----- | ----- | ---- |
| UART 下载模式  | 高        | 高  | 低     | 低    | 高    | 高   |
| Flash 运行模式 | 高        | 高  | 低     | 高    | 高    | 高   |
| Chip 测试模式  | -         | -   | -      | -     | -     | 低   |

### ESP8266EX

ESP8266 默认是通过 UART0 （即 TX0（GPIO1）和 RXD（GPIO3））来下载固件的

硬件接线
需要满足以下接线条件：

VDD     -> 3V3
GND     -> GND   (与供电板“共地”)
EN      -> 拉高   (用于上电启动、不可浮空)
GPIO0   -> 拉低   (进入下载模式)
GPIO15  -> 拉低
TXD0    -> RX
RXD0    -> TX
