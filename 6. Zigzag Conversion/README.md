### 6. Zigzag Conversion

###### Level: Medium

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```JS
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
````

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

##### Example 1:

```JS
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

##### Example 2:
```JS
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
```

Explanation:
```JS
P     I    N
A   L S  I G
Y A   H R
P     I
```

##### Example 3:
```JS
Input: s = "A", numRows = 1
Output: "A"
```

##### Constraints:
```JS
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
```