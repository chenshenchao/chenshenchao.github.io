# [草稿] Flame 速查

- [flame](https://github.com/flame-engine/flame)
- [awesome-flame](https://github.com/flame-engine/awesome-flame)

游戏开发库，包括 3D、音频 等子库。

```bash
# 引入依赖
flutter pub add flame
```

## 组件

flame/game.dart：

- GameWidget：游戏控件
- FlameGame：游戏主体

flame/components.dart：

- World：场景
- SpriteComponent: 精灵控件

flame/events.dart：

- TapCallbacks：操作回调。

## 资源

资源有默认的目录规范（通过 prefix 参数修改前缀），不同函数调用会自动在目录下查询: audio,images,tiles

```dart
await FlameAudio.play('explosion.mp3');
await Flame.images.load('player.png');
await Flame.images.load('enemy.png');

await Flame.images.loadAllImages();

final map1 = await TiledComponent.load('level.tmx', tileSize);
```

```yml
flutter:
  assets:
    - assets/audio/explosion.mp3
    - assets/images/player.png
    - assets/images/enemy.png
    - assets/tiles/level.tmx
```

```
└── assets
    ├── audio
    │   └── explosion.mp3
    ├── images
    │   ├── enemy.png
    │   ├── player.png
    │   └── spritesheet.png
    └── tiles
        ├── level.tmx
        └── map.json
```