# for循环示例集合

# 1. 基本的for循环
print("=== 1. 基本的for循环 ===")
for i in range(5):
    print(f"当前数字: {i}")

# 2. 使用range的步长参数
print("\n=== 2. 使用range的步长参数 ===")
for i in range(0, 10, 2):
    print(f"偶数: {i}")

# 3. 遍历列表
print("\n=== 3. 遍历列表 ===")
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
for fruit in fruits:
    print(f"水果: {fruit}")

# 4. 遍历字符串
print("\n=== 4. 遍历字符串 ===")
word = "Hello"
for char in word:
    print(f"字符: {char}")

# 5. 使用enumerate获取索引和值
print("\n=== 5. 使用enumerate ===")
for index, fruit in enumerate(fruits):
    print(f"索引 {index}: {fruit}")

# 6. 遍历元组
print("\n=== 6. 遍历元组 ===")
colors = ("红", "绿", "蓝")
for color in colors:
    print(f"颜色: {color}")

# 7. 遍历字典
print("\n=== 7. 遍历字典 ===")
student = {"name": "张三", "age": 18, "grade": "高三"}
for key, value in student.items():
    print(f"{key}: {value}")

# 8. 嵌套for循环
print("\n=== 8. 嵌套for循环 ===")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} * {j} = {i*j}")
    print()

# 9. 使用break语句
print("\n=== 9. 使用break语句 ===")
for i in range(10):
    if i == 5:
        break
    print(f"当前数字: {i}")

# 10. 使用continue语句
print("\n=== 10. 使用continue语句 ===")
for i in range(10):
    if i % 2 == 0:
        continue
    print(f"奇数: {i}")

# 11. 计算总和
print("\n=== 11. 计算总和 ===")
nums = [1, 2, 3, 4, 5]
total = 0
for num in nums:
    total += num
print(f"总和: {total}")

# 12. 创建新列表
print("\n=== 12. 创建新列表 ===")
squares = []
for num in range(1, 6):
    squares.append(num ** 2)
print(f"平方列表: {squares}")

# 13. 列表推导式（与for循环相关）
print("\n=== 13. 列表推导式 ===")
cubes = [num ** 3 for num in range(1, 6)]
print(f"立方列表: {cubes}")