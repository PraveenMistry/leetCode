### [414. Third Maximum Number](https://leetcode.com/problems/third-maximum-number/)

##### Level Easy

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.


Example 1:

Input: 
```JS
nums = [3,2,1]
```
Output: 
```JS
1
```
Explanation:
```JS
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
```


Example 2:

Input: 
```JS
nums = [1,2]
```
Output: 
```JS
2
```

Explanation:
```JS
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
```


Example 3:

Input: 
```JS
nums = [2,2,3,1]
```
Output: 
```JS
1
```

Explanation:
```JS
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
```

##### Constraints:
```JS
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
```