# grpc 速查

GRPC 是谷歌开源的一套跨语言远程调用技术栈。

## protobuf

[GitHub 仓库下载](https://github.com/protocolbuffers/protobuf/releases)

专门为 GRPC 定制的二进制序列化工具，本质上和 JSON 做着一样的事，区别在于其是二进制的难以手工处理和编写代码，所以有着配套的工具来生成序列化代码，所以其与 JSON 的区别就是上手这些工具有一定的成本。
主要工具是 protoc 和各种语言生成工具的插件，同时还要掌握定义结构的语言。

### import google 的库

需要拉取源码或者下载编译好的 protoc（里面包含include/google目录），然后在命令里面带上 -I 指定源码目录下的 src 目录；或者把 /src/google 目录复制到 PATH 的里面也行。

```bash
protoc -I /path/to/protobuf/src
```

以下给谷歌的 枚举值扩展一个字段，然后就可以给枚举值添加附属信息，然而这样会影响性能，很多实现都不支持这种做法。

```proto
syntax="proto3";

import "google/protobuf/descriptor.proto";

message PermissionMeta {
    string sign = 1;
    string title = 2;
    string description = 3;
}

extend google.protobuf.EnumValueOptions {
    optional PermissionMeta permission_meta = 12141;
}
```

```pb
syntax="proto3";

package rustic.mall.admin.pb;

import "permission_meta.proto";

enum Permission {
    EMPLOYEE = 0 [
        (permission_meta) = {
            sign: "employee",
            title: "员工管理",
            description: "员工管理"
        }
    ];
    PRODUCT = 1 [
        (permission_meta) = {
            sign: "product",
            title: "商品管理",
            description: "商品管理"
        }
    ];
}
```

## grpc

