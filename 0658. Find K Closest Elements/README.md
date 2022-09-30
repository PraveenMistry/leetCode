### [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)

##### Medium

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:
```JS
|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
```

Example 1:
```JS
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

Example 2:
```JS
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
```

Constraints:
```JS
1 <= k <= arr.length
1 <= arr.length <= 104
arr is sorted in ascending order.
-104 <= arr[i], x <= 104
```


***[For proper Explanation and other approaches Please ref](https://leet-codes.blogspot.com/2022/09/658-find-k-closest-elements.html)***