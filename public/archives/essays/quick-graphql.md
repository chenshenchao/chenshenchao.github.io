# [草稿]GraphQL 速查

## Hasura

- [hasura 源码](https://github.com/hasura/graphql-engine)

有多个版本：

PromtSQL：这个是加了 AI 的版本。
V3: 通过 DDL 命令和 docker 或者云服务部署。
V2: 通过 docker 或者购买云服务部署。

### docker 服务器

```bash
# 克隆
git clone git@github.com:hasura/graphql-engine.git --depth 1

# 到项目里执行 docker compose
docker compose up -d
```

### 命令行客户端

下载 [hasura 的命令行工具](https://github.com/hasura/graphql-engine/releases)（cli-*），配置到 PATH 里面后可以通过这个命令创建项目。

```bash
hasura init

hasura configure --endpoint http://localhost:8080
```