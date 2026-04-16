#!/bin/bash

# 构建脚本

echo "开始构建项目..."

# 检查 Node.js 版本
echo "检查 Node.js 版本..."
node -v

# 安装依赖
echo "安装依赖..."
npm install

# 构建项目
echo "构建项目..."
npm run build

echo "构建完成！"
