# Java 速查

[Maven 中央仓库](https://search.maven.org/) 由 Apache 授权 Sonatype 维护。
[Sonatype 仓库](https://central.sonatype.com/) Sonatype 对 Maven 中央仓库的增强，发布包在这里完成。
[JitPack](https://jitpack.io/) 通过 git 仓库构建成为 jvm 仓库的站点。

## 常用库

- [zxing](https://github.com/zxing/zxing) 条形码、二维码识别库。
- [rhino](https://github.com/mozilla/rhino) 一个 JavaScript 实现。
- [jooq(Java Object Oriented Querying)](https://github.com/jOOQ/jOOQ) 只有查询功能的 ORM ，需要构建配置代码生成。
- [JasperReports](https://www.jaspersoft.com/products/jaspersoft-community) Java 开发的报表软件，[GitHub仓库](https://github.com/Jaspersoft/jasperreports)，功能上比市面上的 FastReport、ActiveReports 等要少一些，但是胜在有免费版。

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