# 基本的for循环示例
print("=== 基本的for循环 ===")
for i in range(5):
    print(f"当前数字: {i}")

# 使用for循环遍历列表
print("\n=== 遍历列表 ===")
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
for fruit in fruits:
    print(f"水果: {fruit}")

# 使用for循环遍历字符串
print("\n=== 遍历字符串 ===")
word = "Hello"
for char in word:
    print(f"字符: {char}")

# 使用for循环与enumerate
print("\n=== 使用enumerate ===")
for index, fruit in enumerate(fruits):
    print(f"索引 {index}: {fruit}")

# 使用for循环计算总和
print("\n=== 计算总和 ===")
nums = [1, 2, 3, 4, 5]
total = 0
for num in nums:
    total += num
print(f"总和: {total}")

# 使用for循环创建新列表
print("\n=== 创建新列表 ===")
squares = []
for num in range(1, 6):
    squares.append(num ** 2)
print(f"平方列表: {squares}")