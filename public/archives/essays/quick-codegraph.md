# [草稿] CodeGraph 速查

- [codegraph](https://github.com/colbymchenry/codegraph)

代码图。

- 底层：Tree-sitter AST 解析引擎（建图数据源）
- 中层：SQLite 图谱数据库（持久化存储查询）
- 上层：MCP STDIO 服务进程（给 Trae/Cursor/Claude 提供调用接口）

```bash
# 安装命令行工具
npm i -g @colbymchenry/codegraph

# 自动适配 IDE 的 MCP ，目前只支持国外的 claude code, cursor, codex
# 国内的自己适配（比如 TRAE 就是去填自定义 MCP）
codegraph install

# 项目内初始化， -i 就是初始化时顺带执行 codegraph index
codegraph init -i

# 查看状态
codegraph status

# 重建索引
codegraph index

# 默认不用管，AI 使用的时候会自动同步索引。
# 开启自动同步
codegraph sync start
# 关闭自动同步
codegraph sync stop
```

以下是不能自动适配的 IDE 使用的 MCP 配置。

```json
{
  "mcpServers": {
    "codegraph": {
      "type": "stdio",
      "command": "codegraph",
      "args": ["serve", "--mcp"],
      "enabled": true
    }
  }
}
```
