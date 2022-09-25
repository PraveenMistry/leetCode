### [220. Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/)

##### Level Medium

Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

 

Example 1:

Input: 
```JS
nums = [1,2,3,1], k = 3, t = 0
```
Output: 
```JS
true
```


Example 2:

Input: 
```JS
nums = [1,0,1,1], k = 1, t = 2
```
Output: 
```JS
true
```


Example 3:

Input: 
```JS
nums = [1,5,9,1,5,9], k = 2, t = 3
```

Output: 
```JS
false
```

##### Constraints:
```JS
1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 104
0 <= t <= 231 - 1
```


***[For details explanation](https://sudomistry.blogspot.com/)***
