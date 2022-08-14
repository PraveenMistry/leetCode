### 300. Longest Increasing Subsequence

##### Level Medium

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:

Input: 
```JS
nums = [10,9,2,5,3,7,101,18]
```

Output:
```JS 
4
```

##### Explanation: 
The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


Example 2:

Input: 
```JS
nums = [0,1,0,3,2,3]
```

Output: 
```JS
4
```

Example 3:

Input: 

```JS
nums = [7,7,7,7,7,7,7]
```

Output: 
```JS
1
```

##### Constraints:
```JS
1 <= nums.length <= 2500
-104 <= nums[i] <= 104
```