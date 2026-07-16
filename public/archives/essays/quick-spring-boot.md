# [草稿]Spring boot 速查

- [spring-boot](https://github.com/spring-projects/spring-boot)
- [spring initializr](https://start.spring.io/) 这网页可生成 Spring 初始项目。（早年 IDEA 创建 Spring 项目是收费插件）
- [spring-ai](https://github.com/spring-projects/spring-ai) Spring 官方 LLM 编排框架。

```bash
# 运行 bootRun 任务（运行 spring boot 服务）
gradlew bootRun

# 子模块运行，并打印错误。
gradlew :admin-api:bootRun --stacktrace --info
```

## 配置

```ini
# 默认地址 0.0.0.0
# 默认端口 8080
server.address=127.0.0.1
server.port=8080
```

```ini
# 启动 虚拟线程
spring.threads.virtual.enabled=true
```

```bash
# 加载 prod
java -jar demo.jar --spring.profiles.active=prod
gradlew bootRun -Dspring.profiles.active=prod
# 加载 dev,local
java -jar demo.jar --spring.profiles.active=dev,local
gradlew bootRun -Dspring.profiles.active=dev,local
```

### 数据库

application.properties 里 JPA 配置 PostgreSQL 示例：

```ini
spring.datasource.url=jdbc:postgresql://localhost/summer
spring.datasource.username=postgres
spring.datasource.password=123456
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=none
#spring.jpa.hibernate.ddl-auto=update
#spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.properties.hibernate.format_sql=true
```

## 包关系

包组 org.springframework.boot

### spring-boot-starter-web 囊括以下包：

- spring-boot-starter-webmvc
- spring-boot-starter-tomcat（默认，可替换成 undertow 等）
- spring-boot-starter-json
- spring-boot-starter-validation

### spring-boot-starter-webmvc （原 MVC 同步框架）囊括以下包：

- spring-boot-starter

### spring-boot-starter-webflux （新基于 Netty 异步框架）囊括以下包：

- spring-boot-starter
- spring-boot-starter-json
- spring-boot-starter-reactor-netty

### spring-boot-starter 囊括以下包：

- spring-boot
- spring-boot-autoconfigure
- spring-boot-starter-logging

## IO

阻塞：Spring MVC + Spring Data JDBC/JPA

- Spring Data JDBC
- Spring Data JPA

### Reactive

因为虚拟线程的出现，这套用户少。

非阻塞： Spring WebFlux + Spring Data R2DBC

- Spring Data R2DBC
