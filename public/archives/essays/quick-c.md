# [草稿]C 速查

## 编译构造工具与包管理

- CMake
- [vcpkg](https://github.com/microsoft/vcpkg)
- [clib](https://github.com/clibs/clib) 
- [cosmopolitan](https://github.com/jart/cosmopolitan) 打着 “一次编译，到处运行。” 的编译工具库。

## 常用库

- [bdwgc](https://github.com/bdwgc/bdwgc) 垃圾回收库，又叫 bdw-gc, boehm-gc, libgc。
- [mjs](https://github.com/cesanta/mjs) 一个 JS 的运行库。
- [QuickJS](https://github.com/quickjs-zh/QuickJS) 一个 JS 的解释器库。
- [upscaledb](https://github.com/cruppstahl/upscaledb) 键值对型数据库实现。
- [unqlite](https://github.com/symisc/unqlite) 键值对型数据库实现。
- [libxml2](https://github.com/GNOME/libxml2) xml 库。
- [msquic](https://github.com/microsoft/msquic) 微软的 QUIC 实现库。
- [zpl](https://github.com/zpl-c/zpl) 工具集合库。
- [enet](https://github.com/zpl-c/enet) UDP 框架。
- [sqlcipher](https://github.com/sqlcipher/sqlcipher) fork SQLite 加入了数据库文件 256bit AES 加密。
- [lz4](https://github.com/lz4/lz4) 压缩算法库。
- [zstd](https://github.com/facebook/zstd) 压缩算法库。
- [zlib](https://github.com/madler/zlib) 压缩算法库。
- [groonga](https://github.com/groonga/groonga) 全文搜索引擎。
- [hiredis](https://github.com/redis/hiredis) redis 客户端库。
- [libpcap](https://github.com/the-tcpdump-group/libpcap) linux 下网络抓包库。
- [npcap](https://github.com/nmap/npcap) Windows 下网络抓包库。

### UI 图形库。

- [sokol](https://github.com/floooh/sokol) 跨平台包括 3D 图形、多媒体等的单头文件库。
- [SDL](https://github.com/libsdl-org/SDL) 
- [libui](https://github.com/andlabs/libui) UI 图形库。
- [libui-ng](https://github.com/libui-ng/libui-ng) fork libui 的 UI 图形库。
- [raygui](https://github.com/raysan5/raygui) 设计风格比较独特的 UI 图形库。
- [raylib](https://github.com/raysan5/raylib) 视频游戏开发库。
- [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) JPEG 图片库。
- [mozjpeg](https://github.com/mozilla/mozjpeg) JPEG 图片库。

### 嵌入式相关

- [CMSIS-Driver](https://github.com/ARM-software/CMSIS-Driver) CMSIS 驱动源码。
- [lvgl](https://github.com/lvgl/lvgl) 
- [u8g2](https://github.com/olikraus/u8g2) 显示屏库。
- [ssd1306](https://github.com/lexus2k/ssd1306) 显示屏库。
- [stm32-ssd1306](https://github.com/afiskon/stm32-ssd1306) STM32 SSD1306 显示屏库。
- [ER_OLEDM1_CH1115](https://github.com/gavinlyonsrepo/ER_OLEDM1_CH1115) CH1115 屏幕驱动。
- [emwin](https://github.com/Infineon/emwin)
- [stlink](https://github.com/stlink-org/stlink) stlink 工具集。
- [ioLibrary_Driver](https://github.com/Wiznet/ioLibrary_Driver) WizNet 的 W5500、W5100 等的驱动。
- [libwdi](https://github.com/pbatard/libwdi) Windows 下的 USB 驱动开发库。
- [FwLib_STC8](https://github.com/IOsetting/FwLib_STC8) STC8 固件库。
- [u-boot](https://github.com/u-boot/u-boot) 引导加载程序。
- [pico-sdk](https://github.com/raspberrypi/pico-sdk) 树莓派 pico SDK