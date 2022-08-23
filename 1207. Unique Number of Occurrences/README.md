### [1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/)

#####Level Easy

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.


Example 1:

Input: 
```JS
arr = [1,2,2,1,1,3]
```
Output: 
```JS
true
```
Explanation: 
```JS
The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
```



Example 2:

Input: 
```JS
arr = [1,2]
```
Output: 
```JS
false
```



Example 3:

Input: 
```JS
arr = [-3,0,1,-3,1,1,1,-3,10,0]
```
Output: 
```JS
true
```

Constraints:
```JS
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
```