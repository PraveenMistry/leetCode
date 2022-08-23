### (53. Maximum Subarray)[https://leetcode.com/problems/maximum-subarray/]

##### Level Medium

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: 
```JS
nums = [-2,1,-3,4,-1,2,1,-5,4]
```
Output: 
```JS
6
```

Explanation: 
```JS
[4,-1,2,1] has the largest sum = 6.
```


***Kadane's Algorithm***
```JS
Init sum = 0, maxsum = -2 (nums[0]);

Index      nums[Index]    sum = (Math.max(sum, 0) + nums[i])          maxSum = (Math.max(sum, maxSum))
0             -2                Math.max(0, 0)  + -2   = -2                  Math.max(-2, -2) = -2
1              1                Math.max(-2, 0) +  1   =  1                  Math.max(1, -2)  =  1
2             -3                Math.max(1, 0)  + -3   = -2                  Math.max(-2, 1)  =  1 
3              4                Math.max(-2, 0) +  4   =  2                  Math.max(2, 1)   =  2
4             -1                Math.max(2, 0)  + -1   = -1                  Math.max(-1, 2)  =  2
5              2                Math.max(-1, 2) +  2   =  4                  Math.max(4, 2)   =  6
6              1                Math.max(4, 0)  +  1   =  5                  Math.max(5, 6)   =  6
7             -5                Math.max(5, 0)  + -5   =  0                  Math.max(0, 6)   =  6
8              4                Math.max(0, 0)  +  4   =  4                  Math.max(4, 6)   =  6
```



Example 2:

Input: 
```JS
nums = [1]
```
Output: 
```JS
1
```


Example 3:

Input: 
```JS
nums = [5,4,-1,7,8]
```
Output: 
```JS
23
```

Constraints:
```JS
1 <= nums.length <= 105
-104 <= nums[i] <= 104
```

***Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.***