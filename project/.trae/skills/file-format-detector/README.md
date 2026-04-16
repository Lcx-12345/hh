# 文件格式检测器技能

## 功能

检测文件格式，特别是图片文件格式。当用户输入包含"图片"、"image"等关键词时自动触发。

## 支持的图片格式

- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- SVG (.svg)
- BMP (.bmp)
- WebP (.webp)
- TIFF (.tiff)
- HEIF (.heif)
- HEIC (.heic)

## 支持的其他文件格式

- 文本文件：.txt, .md
- 配置文件：.json, .yaml, .yml, .xml, .ini, .toml
- 代码文件：.js, .ts, .tsx, .jsx, .html, .css, .scss, .less, .py, .java, .cpp, .h, .cs, .go, .rb, .php, .rs, .swift, .kt
- 脚本文件：.sh, .bat, .cmd
- 可执行文件：.exe, .dll, .app, .dmg
- 压缩文件：.zip, .rar, .7z, .tar, .gz
- 文档文件：.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx
- 数据库文件：.db, .sqlite
- 音频文件：.mp3, .wav, .flac
- 视频文件：.mp4, .avi, .mov

## 使用方法

1. 确保技能已正确安装在项目的 `.trae/skills/file-format-detector` 目录中
2. 当用户输入包含以下关键词时，技能会自动触发：
   - 图片
   - image
   - 图片文件
   - image file
   - 文件格式
   - file format
3. 技能会提示用户提供文件路径
4. 技能会返回文件格式信息，包括：
   - file_format：文件格式
   - is_image：是否为图片文件
   - image_type：图片类型（如果是图片文件）

## 示例

### 输入：
```
图片
```

### 技能提示：
```
请提供文件路径
```

### 用户输入：
```
/workspace/project/test_image.jpg
```

### 技能输出：
```
{
  "file_format": "JPEG",
  "is_image": true,
  "image_type": "JPEG"
}
```

## 技术实现

- 使用 Python 编写
- 通过文件扩展名识别文件格式
- 支持多种图片格式和其他常见文件格式
- 提供清晰的 JSON 格式输出
