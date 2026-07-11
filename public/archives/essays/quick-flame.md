# [草稿] Flame 速查

- [flame](https://github.com/flame-engine/flame)
- [awesome-flame](https://github.com/flame-engine/awesome-flame)

游戏开发库，包括 3D、音频 等子库。

```bash
# 引入依赖
flutter pub add flame
```

## 组件

为提高性能 flame 的组件没有 Flutter 控件的 测量、布局 阶段，全在 flame 自定义的绘制里。

flame/game.dart：

- GameWidget：游戏组件
- FlameGame：游戏主体

flame/components.dart：

- RouterComponent：路由器组件，配置 Route 设置路由。
- World：场景
- PositionComponent： 位置组件
- SpriteComponent: 精灵组件，继承自 PositionComponent，可显示 Sprite。
- SpriteAnimationComponent：精灵动画组件，可显示 Sprite 组成的 SpriteAnimation 动画 或 SpriteAnimationData 配置的动画。
- SpriteAnimationGroupComponent： 精灵动画组组件。
- SpriteGroupComponent：精灵组组件。
- RasterSpriteComponent：
- ParallaxComponent：视差组件
- PolygonComponent： 多边形组件。
- RectangleComponent：方形组件。
- CircleComponent：圆形组件。
- SpawnComponent： 生成组件，提供工厂函数生成组件。
- SvgComponent： SVG 组件。
- IsometricTileMapComponent：斜角等距瓦片图组件。
- NineTileBoxComponent：九格瓦片盒组件。
- CustomPainterComponent：自定义绘制组件。
- ClipComponent： 裁剪组件。
- AlignComponent：
- RowComponent：
- ColumnComponent：
- ExpandedComponent：
- PaddingComponent：
- WidgetComponent：控件组件，可内嵌 Flutter 的 RenderObjectWidget 控件，问题多，不如 Overlay Widgets 盖在 flame 视口上。
- Notifier： 组件通知。

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