### [1668. Maximum Repeating Substring](https://leetcode.com/problems/maximum-repeating-substring/)

##### Level Easy

For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in sequence.

 

Example 1:
```JS
Input: sequence = "ababc", word = "ab"
Output: 2
```

Explanation: 
```JS
"abab" is a substring in "ababc".
```


Example 2:
```JS
Input: sequence = "ababc", word = "ba"
Output: 1
```

Explanation: 
```JS
"ba" is a substring in "ababc". "baba" is not a substring in "ababc".
```


Example 3:
```JS
Input: sequence = "ababc", word = "ac"
Output: 0
```

Explanation: 
```JS
"ac" is not a substring in "ababc". 
```

##### Constraints:
```JS
1 <= sequence.length <= 100
1 <= word.length <= 100
sequence and word contains only lowercase English letters.
```