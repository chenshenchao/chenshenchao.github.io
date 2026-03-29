# [草稿]Gradle 速查

## JDK 版本对照表

| Gradle | JDK |
| 2.0 | 8 |
| 4.3 | 9 |
| 4.7 | 10 |
| 5.0 | 11 |
| 5.4 | 12 |
| 6.0 | 13 |
| 6.3 | 14 |
| 6.7 | 15 |
| 7.0 | 16 |
| 7.3 | 17 |
| 7.5 | 18 |
| 7.6 | 19 |
| 8.1 | 20 |

## 插件

- [gradle-bintray-plugin](https://github.com/bintray/gradle-bintray-plugin) 发布到 bintray 的插件。
- [protobuf-gradle-plugin](https://github.com/google/protobuf-gradle-plugin) protobuf 生成代码插件。
- [gradle-graal](https://github.com/palantir/gradle-graal) 下载 graal 相关工具的插件。
- [gradle-download-task](https://github.com/michel-kraemer/gradle-download-task) 下载文件插件，可以显示下载进度。

GRADLE_HOME
PATH=%PATH%;%GRADLE_HOME%\bin

gradle 包缓存目录 ~/.gradle/caches
~/.gradle/caches/modules-2/files-2.1

## 配置

```groovy
allprojects {
  repositories {
    maven {
        // 阿里云镜像
        url 'https://maven.aliyun.com/repository/public/'
    }
    maven {
        // 华为云镜像
        url 'https://mirrors.huaweicloud.com/repository/maven/'
    }
    maven {
        // 腾讯云镜像
        url 'https://mirrors.cloud.tencent.com/nexus/repository/maven-public/'
    }
  }
}
```

## 常用命令

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

# 打印全部依赖关系
gradlew :app:dependencies >  deps.txt

# 指定依赖查找参数
gradlew :app:dependencyInsight --dependency fastjson --configuration compile
```
