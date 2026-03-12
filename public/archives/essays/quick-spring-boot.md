# [草稿]Spring boot 速查

- [spring initializr](https://start.spring.io/) 这网页可生成 Spring 初始项目。（早年 IDEA 创建 Spring 项目是收费插件）

```bash
# 运行 bootRun 任务（运行 spring boot 服务）
gradlew bootRun
```

## 配置

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
