### (1539. Kth Missing Positive Number)[https://leetcode.com/problems/kth-missing-positive-number/]

##### Level Easy

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
Return the kth positive integer that is missing from this array.

Example 1:

Input: 
```JS
arr = [2,3,4,7,11], k = 5
```

Output: 
```JS
9
```

Explanation:
```JS
The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
```

Example 2:

Input: 
```JS
arr = [1,2,3,4], k = 2
```

Output: 
```JS
6
```

Explanation: 
```JS
The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
```

##### Constraints:
```JS
1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
```