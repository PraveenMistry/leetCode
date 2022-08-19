### [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

##### Level Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: 
```JS
s = "()"
```

Output: 
```JS
true
```


Example 2:

Input: 
```JS
s = "()[]{}"
```

Output: 
```JS
true
```

Example 3:

Input: 
```JS
s = "(]"
```

Output: 
```JS
false
```

Constraints:
```JS
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```