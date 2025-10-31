# RAFT 分布式协议

为了让系统高可用，通过给 Leader 提供不少于 2 个 Follower 做备用节点，在 Leader 故障时可以顶替 Leader 的分布式方案。
此协议确保 Leader 和 Follower 的数据一致性。

1. 集群中的节点必须有一份所有节点的地址表，而 Candidate 过半数成为 Leader 的条件依据这份地址表。
2. 网络分区时，只有过半数的区域可能有 Leader 存在，其他区域不过半数都不可能选举成功。所以无论多少个区，最多只有一个 Leader。

## 角色

- Leader：与客户端交互，整个系统的实际工作节点，正常情况下既要做与单体架构一样的事外还要负责把自己的数据传递到 Follower 做备份。
- Follower：Leader 的备用节点，正常情况下只是同步 Leader 的数据不做其他，Leader 宕机时通过选举顶替 Leader。
- Candidate：选举 Leader 时的临时角色。

## 消息

1. PreVote 预选消息，Candidate 连接过半数的节点才发起选举。
2. VoteRequest 选举消息，Candidate 向其他节点发起选举请求。
3. AppendEntities 心跳与同步消息，Leader 必须定时向 Follower 发送，以证明自己正常及同步日志。

## 术语

- Term：任期
