# [草稿] FlatBuffers 速查

- [flatbuffers](https://github.com/google/flatbuffers)

谷歌开源的二进制序列化库，支持多语言。

## 命令

```bash
flatc --cpp --rust monster.fbs

flatc --rust --rust-snake-case-fields monster.fbs
```

## 示例

```fbs
// monster.fbs

namespace MyGame; // 命令空间、包名、模块名。

include "mydefinitions.fbs"; // 引入其他 fbs 文件。

attribute "priority"; // 自定义属性，自定义生成器时可获取。

// 枚举
enum Color : byte { Red = 1, Green, Blue }

// 联合体
union Any { Monster, Weapon, Pickup }

// 结构体（大小固定结构，无元数据，不能放变长数组字段，只能放定长数组。）
struct Vec3 {
  x:float;
  y:float;
  z:float;
  i:float[3];
}

// 表，类似 protobuf 的 message（大小可变，带元数据，元数据类似文件头。）
table Monster {
  pos:Vec3;
  mana:short = 150;
  hp:short = 100;
  name:string;
  friendly:bool = false (deprecated, priority: 1); // 内置属性 deprecated，自定义属性 priority=1
  inventory:[ubyte]; // 变长数组
  color:Color = Blue;
  test:Any;
}

table Weapon {}
table Pickup {}

root_type Monster; // 根类型，必须是 table，整包的定义。
```