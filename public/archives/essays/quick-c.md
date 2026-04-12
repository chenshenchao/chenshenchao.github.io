# [草稿]C 速查

## 编译构造工具与包管理

- CMake
- [xmake](https://github.com/xmake-io/xmake) 以 lua 为脚本的构建工具。
- [vcpkg](https://github.com/microsoft/vcpkg) 基于 CMAKE 的包管理工具。
- [clib](https://github.com/clibs/clib) 包管理工具
- [conan](https://github.com/conan-io/conan) python 写的 C/C++ 包管理工具。
- [biicode](https://github.com/biicode/biicode) C/C++ 包管理工具。
- [cosmopolitan](https://github.com/jart/cosmopolitan) 打着 “一次编译，到处运行。” 的编译工具库。
- [buckaroo](https://github.com/LoopPerfect/buckaroo) F# 开发的 C/C++ 包管理。

## 常用库

- [xdp-for-windows](https://github.com/microsoft/xdp-for-windows)
- [robin-map](https://github.com/Tessil/robin-map) 罗宾汉散列算法的散列表。
- [bdwgc](https://github.com/bdwgc/bdwgc) 垃圾回收库，又叫 bdw-gc, boehm-gc, libgc。
- [mjs](https://github.com/cesanta/mjs) 一个 JS 的运行库。
- [QuickJS](https://github.com/quickjs-zh/QuickJS) 一个 JS 的解释器库。
- [libxml2](https://github.com/GNOME/libxml2) xml 库。
- [libexpat](https://github.com/libexpat/libexpat) xml 库。
- [lz4](https://github.com/lz4/lz4) 压缩算法库。
- [zstd](https://github.com/facebook/zstd) 压缩算法库。
- [zlib](https://github.com/madler/zlib) 压缩算法库。
- [zlib-ng](https://github.com/zlib-ng/zlib-ng) 下一代 zlib 压缩算法库。
- [minizip-ng](https://github.com/zlib-ng/minizip-ng) zip 处理库。
- [libzip](https://github.com/nih-at/libzip) zip 文件处理库。
- [lemon](https://github.com/lemon-lang/lemon) 可内嵌的小型编程语言 lemon。
- [berry](https://github.com/berry-lang/berry) 可内嵌的小型编程语言。
- [mupdf](https://github.com/ArtifexSoftware/mupdf) PDF 库。
- [pdfio](https://github.com/michaelrsweet/pdfio) PDF 库。
- [libxls](https://github.com/libxls/libxls) Excel xls 文件处理库。
- [xlsxio](https://github.com/brechtsanders/xlsxio)  Excel xlsx 文件处理库。
- [libxlsxwriter](https://github.com/jmcnamara/libxlsxwriter) Excel xlsx 文件创建库。
- [librg](https://github.com/zpl-c/librg) 多玩家游戏开发库。
- [json-parser](https://github.com/json-parser/json-parser) json 序列化库。
- [cJSON](https://github.com/DaveGamble/cJSON)  json 序列化库。
- [json-c](https://github.com/json-c/json-c) json 序列化库。
- [libxo](https://github.com/Juniper/libxo) 格式化输出 文本, XML, JSON, HTML 的库，一般用于日志格式化输出。
- [kissfft](https://github.com/mborgerding/kissfft) FFT（Fast Fourier Transform，快速傅里叶变换）库。
- [libsodium](https://github.com/jedisct1/libsodium) 加密算法库。
- [shine](https://github.com/toots/shine) MP3 库，支持 前端 JS/WASM 和 安卓 的封装。
- [minimp3](https://github.com/lieff/minimp3) 单头文件的 MP3 库。
- [opus](https://github.com/xiph/opus) opus 音频库。
- [portaudio](https://github.com/PortAudio/portaudio) 音频处理库。
- [cmdline](https://github.com/tanakh/cmdline) 命令行参数解析库。
- [getopt](https://github.com/skeeto/getopt) 命令行参数解析库。
- [coroutine](https://github.com/cloudwu/coroutine) 协程库。
- [PurC](https://github.com/HVML/PurC) HVML 模板语言的解释器。
- [flecs](https://github.com/SanderMertens/flecs) 类 U3D 的实体组件系统，把组件挂在实体上，使用组合，而非继承的方式。
- [libmatoya](https://github.com/snowcone-ltd/libmatoya) 工具库。
- [libssh2](https://github.com/libssh2/libssh2) SSH2 库。
- [libffi](https://github.com/libffi/libffi) ffi 库。
- [MemoryModule](https://github.com/fancycode/MemoryModule) 内存中加载 DLL 的库。
- [vlc](https://github.com/videolan/vlc) vlc 视频播放库，支持 Windows、安卓 等平台。
- [v7](https://github.com/cesanta/v7) 可内嵌的 JS 脚本引擎。
- [tbox](https://github.com/tboox/tbox) glib 代码风格的 C 工具库。
- [friso](https://github.com/lionsoul2014/friso) 中文分词库，提供了 PHP 、Lua、OCaml 等的插件。
- [jemalloc](https://github.com/jemalloc/jemalloc) 通用的 malloc 内存分配库。
- [libusb](https://github.com/libusb/libusb) USB 库。
- [pipewire](https://github.com/PipeWire/pipewire) Linux 多媒体库，录制播放音频，截取视频帧等。

### 数据库

- [dqlite](https://github.com/canonical/dqlite) 可内嵌的分布式 SQLite 库。
- [hiredis](https://github.com/redis/hiredis) redis 客户端库。
- [upscaledb](https://github.com/cruppstahl/upscaledb) 键值对型数据库实现。
- [unqlite](https://github.com/symisc/unqlite) 键值对型数据库实现。
- [sqlite](https://github.com/sqlite/sqlite)
- [sqlcipher](https://github.com/sqlcipher/sqlcipher) fork SQLite 加入了数据库文件 256bit AES 加密。
- [groonga](https://github.com/groonga/groonga) 全文搜索引擎。

### 网络

- [kcp](https://github.com/skywind3000/kcp) KCP 协议实现。
- [h2o](https://github.com/h2o/h2o) HTTP 服务器。
- [uSockets](https://github.com/uNetworking/uSockets) web 框架。
- [msquic](https://github.com/microsoft/msquic) 微软的 QUIC 实现库。
- [zpl](https://github.com/zpl-c/zpl) 工具集合库。
- [enet](https://github.com/zpl-c/enet) UDP 框架。
- [libpcap](https://github.com/the-tcpdump-group/libpcap) linux 下网络抓包库。
- [npcap](https://github.com/nmap/npcap) Windows 下网络抓包库。
- [Win10Pcap](https://github.com/SoftEtherVPN/Win10Pcap) Windows 10 (NDIS 6.x driver model) 网络抓包库。
- [nodejs http-parser](https://github.com/nodejs/http-parser) 的 HTTP 报文解析器。
- [libuv](https://github.com/libuv/libuv) 跨平台异步IO库。
- [cryptlib](https://github.com/cryptlib/cryptlib) TLS 等安全工具库。
- [cyrus-sasl](https://github.com/cyrusimap/cyrus-sasl)
- [gnutls](https://github.com/gnutls/gnutls) GNU TLS 库。
- [openssl](https://github.com/openssl/openssl) TLS 等加密算法库。

### 图形

- [sokol](https://github.com/floooh/sokol) 跨平台包括 3D 图形、多媒体等的单头文件库。
- [SDL](https://github.com/libsdl-org/SDL) 
- [SDL_image](https://github.com/libsdl-org/SDL_image) SDL 图片支持。
- [libui](https://github.com/andlabs/libui) UI 图形库。
- [libui-ng](https://github.com/libui-ng/libui-ng) fork libui 的 UI 图形库。
- [raygui](https://github.com/raysan5/raygui) 设计风格比较独特的 UI 图形库。
- [raylib](https://github.com/raysan5/raylib) 视频游戏开发库。
- [freetype](https://github.com/freetype/freetype)
- [otfcc](https://github.com/caryll/otfcc) 字体工具库。
- [libgd](https://github.com/libgd/libgd) GD 图形库。
- [libpng](https://github.com/pnggroup/libpng) PNG 图片库。
- [libwebp](https://github.com/webmproject/libwebp) webp 图片库。
- [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) JPEG 图片库。
- [mozjpeg](https://github.com/mozilla/mozjpeg) JPEG 图片库。
- [nanovg](https://github.com/memononen/nanovg) 2D 矢量图库。
- [plutovg](https://github.com/sammycage/plutovg) 2D 矢量图库。
- [plutosvg](https://github.com/sammycage/plutosvg) SVG 库。
- [tcl](https://github.com/tcltk/tcl)
- [LCUI](https://github.com/lc-soft/LCUI) 图形开发框架，基于 web 方式。
- [RetroArch](https://github.com/libretro/RetroArch) 基于 Libretro 的前端图形框架，支持安卓、PS、Xbox、任天堂等。
- [lab](https://github.com/google-deepmind/lab) 一个 3D 引擎，用于 AI 研究。

### 嵌入式相关

- [CMSIS-Driver](https://github.com/ARM-software/CMSIS-Driver) CMSIS 驱动源码。
- [lvgl](https://github.com/lvgl/lvgl) 
- [awtk](https://github.com/zlgopen/awtk) 图形框架。
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
- [mjs](https://github.com/cesanta/mjs) 嵌入式 JS 引擎。
- [EasyFlash](https://github.com/armink/EasyFlash) 嵌入式利用 Flash 做键值对数据库。（目前支持 stm32f10x与 stm32f4xx）
- [FlashDB](https://github.com/armink/FlashDB) 嵌入式利用 Flash 做键值对数据库。
- [ijjs](https://github.com/MarilynDafa/ijjs) 嵌入式 JS 运行库。

## 示例、项目

- [SmallerC](https://github.com/alexfru/SmallerC) 简单的 C 编译器。
- [lcc](https://github.com/drh/lcc) C 编译器。
- [8cc](https://github.com/rui314/8cc) C 编译器。
- [vm86](https://github.com/tboox/vm86) x86 虚拟机，壳。
- [mpv](https://github.com/mpv-player/mpv) 跨平台视频播放器。
- [FlashDB](https://github.com/armink/FlashDB) 一款支持 KV 数据和时序数据的超轻量级数据库
- [fastcgi-demo](https://github.com/zhyee/fastcgi-demo) FastCGI 示例。
- [tcpdump](https://github.com/the-tcpdump-group/tcpdump) TCP 抓包命令行工具。
- [tcprstat](https://github.com/y123456yz/tcprstat) TCP 时延统计工具
- [curl](https://github.com/curl/curl)
- [httpsqs](https://github.com/deniskin82/httpsqs) 消息队列。
- [lighttpd1.4](https://github.com/lighttpd/lighttpd1.4) 类 nginx 的轻量级代理服务器。
- [lighttpd2](https://github.com/lighttpd/lighttpd2) 类 nginx 的轻量级代理服务器。
- [tengine](https://github.com/alibaba/tengine) 阿里开源的基于 nginx 的代理服务器。
- [nghttp2](https://github.com/nghttp2/nghttp2) http 命令行 客户端和服务器工具。
- [nuster](https://github.com/jiangwenyuan/nuster) HTTP 代理缓存服务器。
- [twemproxy](https://github.com/twitter/twemproxy) 分布式 redis 代理服务器。
- [syslog-ng](https://github.com/syslog-ng/syslog-ng) 日志方案服务，可以接收 系统、网络、SQL、NoSQL 等的日志。
- [kamailio](https://github.com/kamailio/kamailio) 一个VoIP、即时通信框架。

## 工具

- [c2go](https://github.com/elliotchance/c2go) C 源码转 GO 源码工具。
- [c2go](https://github.com/goplus/c2go) C 源码转 GO 源码工具，已经停止维护。
- [llgo](https://github.com/goplus/llgo) 基于 LLVM 的 GO 编译器，更好地和 C、Python 混编。
- [hashcat](https://github.com/hashcat/hashcat) 密码破解工具。
- [eclipse-embed-cdt](https://github.com/eclipse-embed-cdt/eclipse-plugins) eclipse 支持  Arm、RISC-V 嵌入式的插件。
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) 谷歌开源的 chrome DevTools 的 IOS 调试代理。
- [darktable](https://github.com/darktable-org/darktable) RAW 格式图片查看器。
