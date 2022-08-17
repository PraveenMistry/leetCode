### [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

##### Level Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 

Example 1:


Input: 
```JS
l1 = [2,4,3], l2 = [5,6,4]
```

Output: 
```JS
[7,0,8]
```

Explanation: 
```JS
342 + 465 = 807.
```


Example 2:

Input: 
```JS
l1 = [0], l2 = [0]
```

Output: 
```JS
[0]
```

Example 3:

Input: 
```JS
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
```

Output: 
```JS
[8,9,9,9,0,0,0,1]
```
 

### Constraints:

```JS
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
```
