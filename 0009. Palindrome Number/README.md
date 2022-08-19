### [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)

###### Level Easy

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: 
```JS
x = 121
```
Output: 
```JS
true
```

Explanation: 
```JS
121 reads as 121 from left to right and from right to left.
```

Example 2:

Input: 
```JS
x = -121
```
Output: 
```JS
false
```

Explanation: 
```JS
From left to right, it reads -121. 
From right to left, it becomes 121-. Therefore it is not a palindrome.
```


Example 3:

Input: 
```JS
x = 10
```
Output: 
```JS
false
```

Explanation: 
```JS
Reads 01 from right to left. Therefore it is not a palindrome.
```

##### Constraints:
```JS
-231 <= x <= 231 - 1
```
