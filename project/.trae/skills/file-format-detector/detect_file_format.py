#!/usr/bin/env python3
"""
文件格式检测器
检测文件格式，特别是图片文件格式
"""

import os
import argparse
import json
from pathlib import Path

# 图片文件扩展名映射
IMAGE_EXTENSIONS = {
    '.jpg': 'JPEG',
    '.jpeg': 'JPEG',
    '.png': 'PNG',
    '.gif': 'GIF',
    '.svg': 'SVG',
    '.bmp': 'BMP',
    '.webp': 'WebP',
    '.tiff': 'TIFF',
    '.heif': 'HEIF',
    '.heic': 'HEIC'
}

# 其他常见文件格式
COMMON_FORMATS = {
    '.txt': 'Text',
    '.md': 'Markdown',
    '.json': 'JSON',
    '.yaml': 'YAML',
    '.yml': 'YAML',
    '.xml': 'XML',
    '.ini': 'INI',
    '.toml': 'TOML',
    '.js': 'JavaScript',
    '.ts': 'TypeScript',
    '.tsx': 'TypeScript React',
    '.jsx': 'JavaScript React',
    '.html': 'HTML',
    '.css': 'CSS',
    '.scss': 'SCSS',
    '.less': 'LESS',
    '.py': 'Python',
    '.java': 'Java',
    '.cpp': 'C++',
    '.h': 'C/C++ Header',
    '.cs': 'C#',
    '.go': 'Go',
    '.rb': 'Ruby',
    '.php': 'PHP',
    '.rs': 'Rust',
    '.swift': 'Swift',
    '.kt': 'Kotlin',
    '.sql': 'SQL',
    '.sh': 'Shell Script',
    '.bat': 'Batch Script',
    '.cmd': 'Command Script',
    '.exe': 'Windows Executable',
    '.dll': 'Dynamic Link Library',
    '.app': 'macOS Application',
    '.dmg': 'macOS Disk Image',
    '.zip': 'ZIP Archive',
    '.rar': 'RAR Archive',
    '.7z': '7-Zip Archive',
    '.tar': 'TAR Archive',
    '.gz': 'Gzip Compressed',
    '.pdf': 'PDF Document',
    '.doc': 'Word Document',
    '.docx': 'Word Document (XML)',
    '.xls': 'Excel Spreadsheet',
    '.xlsx': 'Excel Spreadsheet (XML)',
    '.ppt': 'PowerPoint Presentation',
    '.pptx': 'PowerPoint Presentation (XML)',
    '.db': 'Database File',
    '.sqlite': 'SQLite Database',
    '.mp3': 'MP3 Audio',
    '.wav': 'WAV Audio',
    '.flac': 'FLAC Audio',
    '.mp4': 'MP4 Video',
    '.avi': 'AVI Video',
    '.mov': 'MOV Video'
}

def detect_file_format(file_path):
    """
    检测文件格式
    
    Args:
        file_path (str): 文件路径
    
    Returns:
        dict: 包含文件格式信息的字典
    """
    # 检查文件是否存在
    if not os.path.exists(file_path):
        return {
            "error": "文件不存在",
            "file_format": "Unknown",
            "is_image": False,
            "image_type": "None"
        }
    
    # 获取文件扩展名
    file_ext = os.path.splitext(file_path)[1].lower()
    
    # 检查是否为图片文件
    if file_ext in IMAGE_EXTENSIONS:
        return {
            "file_format": IMAGE_EXTENSIONS[file_ext],
            "is_image": True,
            "image_type": IMAGE_EXTENSIONS[file_ext]
        }
    
    # 检查其他常见格式
    if file_ext in COMMON_FORMATS:
        return {
            "file_format": COMMON_FORMATS[file_ext],
            "is_image": False,
            "image_type": "None"
        }
    
    # 未知格式
    return {
        "file_format": "Unknown",
        "is_image": False,
        "image_type": "None"
    }

def main():
    """
    主函数
    """
    parser = argparse.ArgumentParser(description='文件格式检测器')
    parser.add_argument('file_path', type=str, help='文件路径')
    args = parser.parse_args()
    
    result = detect_file_format(args.file_path)
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
