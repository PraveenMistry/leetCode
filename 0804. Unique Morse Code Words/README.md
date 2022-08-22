### 804. Unique Morse Code Words

##### Level Easy

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
```JS
'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
```
For convenience, the full table for the 26 letters of the English alphabet is given below:
```JS
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example 
```JS
"cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
```
Return the number of different transformations among all words we have.

 

Example 1:

Input: 
```JS
words = ["gin","zen","gig","msg"]
```

Output: 
```JS
2
```

Explanation: 
```JS
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
```


Example 2:

Input: 
```JS
words = ["a"]
```

Output: 
```JS
1
```

##### Constraints:
```JS
1 <= words.length <= 100
1 <= words[i].length <= 12
words[i] consists of lowercase English letters.
```