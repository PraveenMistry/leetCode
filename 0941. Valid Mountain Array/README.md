### [941. Valid Mountain Array](https://leetcode.com/problems/valid-mountain-array/)

##### Easy

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:
```JS
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
```
 

Example 1:
```JS
Input: arr = [2,1]
Output: false
```


Example 2:
```JS
Input: arr = [3,5,5]
Output: false
```


Example 3:
```JS
Input: arr = [0,3,2,1]
Output: true
```


##### Constraints:
```JS
1 <= arr.length <= 104
0 <= arr[i] <= 104
```