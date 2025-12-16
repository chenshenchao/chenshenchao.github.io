# ffmpeg 速查

### 命令行工具

## ffmpeg

```bash
# 格式转换
# -i 输入文件路径
# -f 输出格式
ffmpeg -i input.mp4 -f avi output.avi
```

```bash
# 生成 15s 静音 mp3 文件
# -f lavfi 输入源为 Libavfilter input 虚拟输入源，-i 可以是 anullsrc sine color testsrc
# -i anullsrc=channel_layout=stereo:sample_rate=44100 指定输入源为 null 立体声 44100 采样率
# -i sine=channel_layout=mono:sample_rate=44100 指定输入源为 正弦波 单声道 44100 采样率
# -t 15 指定时长 15 秒
# -c:a libmp3lame 使用 MP3 编码器
# -q:a 4 设置 VBR 质量等级为 4， 0 接近无损， 9低质量音质。
ffmpeg -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 -t 15 -c:a libmp3lame -q:a 4 silence_15s.mp3
```

# ffplay

# ffprobe

```bash
# 显示流信息
ffprobe -show_streams input.mp4
```