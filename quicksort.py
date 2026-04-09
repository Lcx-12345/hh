def quicksort(arr):
    """
    快速排序算法实现
    :param arr: 待排序的列表
    :return: 排序后的列表
    """
    if len(arr) <= 1:
        return arr
    
    # 选择基准元素
    pivot = arr[len(arr) // 2]
    
    # 分区操作
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    # 递归排序左右子列表
    return quicksort(left) + middle + quicksort(right)

# 测试代码
if __name__ == "__main__":
    test_arr = [3, 6, 8, 10, 1, 2, 1]
    print("原始数组:", test_arr)
    sorted_arr = quicksort(test_arr)
    print("排序后数组:", sorted_arr)