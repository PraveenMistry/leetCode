### [1. Two Sum](https://leetcode.com/problems/two-sum/)

##### Level : Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 

Example 1:

Input: 
```JS
nums = [2,7,11,15], target = 9
```

Output: 
```JS
[0,1]
```

Explanation: 
```JS
Because nums[0] + nums[1] == 9, we return [0, 1].
```


Example 2:

Input: 
```JS
nums = [3,2,4], target = 6
```

Output: 
```JS
[1,2]
```

Example 3:

Input: 
```JS
nums = [3,3], target = 6
```

Output: 
```JS
[0,1]
```

### Constraints:

```JS
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
```
 

## Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
