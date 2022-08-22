### [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

##### Level Easy

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: 
```JS
nums = [1,2,3,1], k = 3
```
Output: 
```JS
true
```

Example 2:

Input: 
```JS
nums = [1,0,1,1], k = 1
```
Output: 
```JS
true
```


Example 3:

Input: 
```JS
nums = [1,2,3,1,2,3], k = 2
```
Output: 
```JS
false
```

##### Constraints:
```JS
1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
```