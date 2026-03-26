import wave
import math
import struct
import zipfile
import tarfile
import base64
import os

test_dir = '/workspace/test'

# 1. 生成音频文件 (WAV格式，1秒钟 440Hz 正弦波)
audio_path = os.path.join(test_dir, 'test.wav')
with wave.open(audio_path, 'w') as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(44100)
    for i in range(44100):
        val = int(32767.0 * math.sin(2.0 * math.pi * 440.0 * i / 44100.0))
        w.writeframesraw(struct.pack('<h', val))

# 2. 生成真正的图片文件 (PNG格式，1x1 红色像素，通过 Base64 解码写入)
png_base64 = b"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
png_path = os.path.join(test_dir, 'test.png')
with open(png_path, 'wb') as f:
    f.write(base64.b64decode(png_base64))

# 3. 生成真正的图片文件 (GIF格式，1x1 透明像素)
gif_base64 = b"R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
gif_path = os.path.join(test_dir, 'test.gif')
with open(gif_path, 'wb') as f:
    f.write(base64.b64decode(gif_base64))

# 4. 生成压缩文件 (ZIP格式，包含一个文本文件)
zip_path = os.path.join(test_dir, 'test.zip')
with zipfile.ZipFile(zip_path, 'w') as zf:
    zf.writestr('hello.txt', 'This is a file inside a ZIP archive!')

# 5. 生成压缩文件 (Tar.gz 格式)
tar_path = os.path.join(test_dir, 'test.tar.gz')
with tarfile.open(tar_path, 'w:gz') as tf:
    html_file = os.path.join(test_dir, 'test.html')
    if os.path.exists(html_file):
        tf.add(html_file, arcname='test.html')
