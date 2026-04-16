# Makefile 示例

# 变量定义
NODE_BIN := node_modules/.bin

# 默认目标
.DEFAULT_GOAL := help

# 帮助信息
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build project"
	@echo "  make test       - Run tests"
	@echo "  make clean      - Clean build output"

# 安装依赖
install:
	npm install

# 启动开发服务器
dev:
	npm run dev

# 构建项目
build:
	npm run build

# 运行测试
test:
	npm test

# 清理构建输出
clean:
	rm -rf dist/
	rm -rf build/
