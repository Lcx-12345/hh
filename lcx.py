def quick_sort(arr):
    """快速排序（简洁版）- 返回新列表"""
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)


def _partition(arr, low, high):
    """分区函数：将数组分为 < pivot 和 >= pivot 两部分"""
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def _quick_sort_recursive(arr, low, high):
    """递归辅助函数"""
    if low < high:
        pi = _partition(arr, low, high)
        _quick_sort_recursive(arr, low, pi - 1)
        _quick_sort_recursive(arr, pi + 1, high)


def quick_sort_inplace(arr):
    """快速排序（原地版）- 直接修改原数组，空间复杂度 O(log n)"""
    _quick_sort_recursive(arr, 0, len(arr) - 1)
    return arr


if __name__ == "__main__":
    test_arr1 = [3, 6, 8, 10, 1, 2, 1]
    print("=== 简洁版 ===")
    print("原始数组:", test_arr1)
    print("排序结果:", quick_sort(test_arr1))

    test_arr2 = [3, 6, 8, 10, 1, 2, 1]
    print("\n=== 原地版 ===")
    print("原始数组:", test_arr2)
    quick_sort_inplace(test_arr2)
    print("排序结果:", test_arr2)
