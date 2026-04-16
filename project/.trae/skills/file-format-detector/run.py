#!/usr/bin/env python3
"""
文件格式检测器技能执行脚本
"""

import json
import sys
import os
from detect_file_format import detect_file_format

def main():
    """
    主函数，处理技能调用
    """
    # 读取输入
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        print(json.dumps({
            "error": "输入格式错误",
            "file_format": "Unknown",
            "is_image": False,
            "image_type": "None"
        }))
        return
    
    # 获取文件路径
    file_path = input_data.get('file_path')
    if not file_path:
        print(json.dumps({
            "error": "缺少文件路径",
            "file_format": "Unknown",
            "is_image": False,
            "image_type": "None"
        }))
        return
    
    # 检测文件格式
    result = detect_file_format(file_path)
    
    # 输出结果
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    main()
