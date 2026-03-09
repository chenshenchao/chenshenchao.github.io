# Java 速查

- [jdk](https://github.com/openjdk/jdk) OpenJDK
- [Maven 中央仓库](https://search.maven.org/) 由 Apache 授权 Sonatype 维护。
- [Sonatype 仓库](https://central.sonatype.com/) Sonatype 对 Maven 中央仓库的增强，发布包在这里完成。
- [JitPack](https://jitpack.io/) 通过 git 仓库构建成为 jvm 仓库的站点。

## 常用库

- [gson](https://github.com/google/gson) 谷歌开源的 JSON 序列化库。
- [logging-log4j2](https://github.com/apache/logging-log4j2) 日志库。
- [guava](https://github.com/google/guava) 谷歌开源的工具库。
- [spring-boot](https://github.com/spring-projects/spring-boot)
- [undertow](https://github.com/undertow-io/undertow) Web 服务器。
- [zxing](https://github.com/zxing/zxing) 条形码、二维码识别库。
- [rhino](https://github.com/mozilla/rhino) 一个 JavaScript 实现。
- [h2database](https://github.com/h2database/h2database) 可内嵌的关系数据库。
- [jooq(Java Object Oriented Querying)](https://github.com/jOOQ/jOOQ) 只有查询功能的 ORM ，需要构建配置代码生成。
- [mysql-binlog-connector-java](https://github.com/shyiko/mysql-binlog-connector-java)
- [JasperReports](https://www.jaspersoft.com/products/jaspersoft-community) Java 开发的报表软件，[GitHub仓库](https://github.com/Jaspersoft/jasperreports)，功能上比市面上的 FastReport、ActiveReports 等要少一些，但是胜在有免费版。
- [litiengine](https://github.com/gurkenlabs/litiengine) 2D 游戏引擎，有配套的 Eclipse 插件。
- [deeplearning4j](https://github.com/deeplearning4j/deeplearning4j) 深度学习框架。
- [openjfx](https://github.com/openjdk/jfx) 开源版的 JavaFx
- [openjfx samples](https://github.com/openjfx/samples)
- [gluonj](https://github.com/chibash/gluonj) AOP 面向切片库。
- [flink](https://github.com/apache/flink) 流扩展库。
- [captcha](https://github.com/raodv/captcha) 行为验证码(滑动拼图、点选文字)，适配多种前端（web、安卓、Flutter）
- [OpenPDF](https://github.com/LibrePDF/OpenPDF) PDF 库。
- [pdfbox](https://github.com/apache/pdfbox) Apache 开源的 PDF 库。
- [easyexcel](https://github.com/alibaba/easyexcel) 阿里开源的 Excel xls xlsx 处理库。
- [poi](https://github.com/apache/poi) 微软 Office 相关的 Excel、Word 等的处理库。
- [java-faker](https://github.com/DiUS/java-faker) 生成调试数据的库。
- [datafaker](https://github.com/datafaker-net/datafaker) 生成调试数据的库。
- [instancio](https://github.com/instancio/instancio) 生成数据的库，用于单元测试。
- [jedis](https://github.com/redis/jedis) redis 客户端库。
- [redisson](https://github.com/redisson/redisson) redis 客户端库。
- [jSerialComm](https://github.com/Fazecast/jSerialComm) 串口库。
- [mina](https://github.com/apache/mina) Apache 开源的一个 Web 框架。
- [retrofit](https://github.com/square/retrofit) 类型安全的 HTTP 客户端。
- [httpcomponents-client](https://github.com/apache/httpcomponents-client) HTTP 客户端。
- [javassist](https://github.com/jboss-javassist/javassist) JVM 字节码工程库。
- [mina-sshd](https://github.com/apache/mina-sshd) SSH 库。
- [sshj](https://github.com/hierynomus/sshj) ssh、scp 功能库。
- [miniscript](https://github.com/mini2Dx/miniscript) 支持 Lua、Ruby 等的多语言解释器。
- [jnr-ffi](https://github.com/jnr/jnr-ffi) FFI 库。
- [java-cef](https://github.com/chromiumembedded/java-cef) CEF 绑定封装。
- [Chat2DB](https://github.com/CodePhiliaX/Chat2DB) 多种数据库客户端。
- [com4j](https://github.com/kohsuke/com4j) COM 和 Java 绑定。
- [motan](https://github.com/weibocom/motan) RPC 框架。
- [grpc-java](https://github.com/grpc/grpc-java)
- [lucene](https://github.com/apache/lucene) 倒排索引库。
- [litiengine](https://github.com/gurkenlabs/litiengine) 纯 JAVA 2D 游戏引擎。

## 项目、示例

- [pulsar](https://github.com/apache/pulsar) 分布式订阅发布的消息服务。
- [questdb](https://github.com/questdb/questdb) 时序数据库，支持多语言客户端。

## 开发环境与包管理工具

常见问题：

1. 如果拉包后出现类找不到的问题，大概率是由于墙的原因，导致拉包失败但是又没有清理干净，导致 gradle 误以为包已经拉取了，但是实际是个空的，此时就会报找不到类。

### maven

### gradle

gradle 包缓存目录 ~/.gradle/caches
~/.gradle/caches/modules-2/files-2.1

```bash
# 创建项目（交互模式）
gradle init --interactive
# 创建项目
gradle init --project-name your_project
# 创建项目，指定是 Java 项目，测试框架用 junit-jupiter ,构建脚本语言为 groovy
gradle init --project-name your_project --type java-application --test-framework junit-jupiter --dsl groovy
```

```bash
# 查看任务
gradlew tasks

# 项目创建后一般使用 gradlew 而不是 gradle ，因为 gradlew 带了 jdk、gradle 等的版本，确保项目的部署版本不会错。
# 构建，重新拉包。
gradlew build --refresh-dependencies
# 跳过 test 任务
gradlew build -x test

# 打印依赖
gradlew dependencies --configuration runtimeClasspath
```

### [SDKMAN](https://sdkman.io/)

Java SDK 多版本管理工具。（目前只支持 Linux、MacOS； Windows 下只能装虚拟机里或者 WSL 里）

```bash
# linux 安装 SDKMAN
curl -s "https://get.sdkman.io" | bash

# SDKMAN 安装 graalvm ， sdk install java <version>-graal
sdk install java 23-graal

# SDKMAN 搜索
sdk list java
```

## GraalVM

GraalVM 除了作为性能向的 JVM 外，还支持把 JVM 语言（Java、Scala、Kotlin等）编译成二进制 Native Image，这样来得到原生性能。

[CE 下载地址](https://github.com/graalvm/graalvm-ce-builds)

### Native Image

需要给脚本启用构建工具插件。

```groovy
// 加入构造工具插件
plugins {
    id 'org.graalvm.buildtools.native' version '0.10.3'
}
```

```kotlin
// 加入构造工具插件
plugins {
    id("org.graalvm.buildtools.native") version "0.10.3"
}
```

执行这几个任务时需要确保命令行环境的 GRAALVM_HOME 和 JAVA_HOME 环境变量指向 GraalVM 目录，并 PATH 里面是使用 GRAALVM 作为 java 的路径。

```bash
# 加入工具后会比一般项目多出几个 native* 开头的任务。
# 编译到 /app/build/native/nativeCompile 目录。
./gradlew nativeCompile

# 运行 原生程序
gradlew nativeRun
```