### [838. Push Dominoes](https://leetcode.com/problems/push-dominoes/)

##### Medium


There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

You are given a string dominoes representing the initial state where:
```JS
dominoes[i] = 'L', if the ith domino has been pushed to the left,
dominoes[i] = 'R', if the ith domino has been pushed to the right, and
dominoes[i] = '.', if the ith domino has not been pushed.
Return a string representing the final state.
```
 

Example 1:
```JS
Input: dominoes = "RR.L"
Output: "RR.L"
```

Explanation: 
```JS
The first domino expends no additional force on the second domino.
```

Example 2:
```JS
Input: dominoes = ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
```

Constraints:
```JS
n == dominoes.length
1 <= n <= 105
dominoes[i] is either 'L', 'R', or '.'.
```


***[For more detail](https://leet-codes.blogspot.com/2022/09/838-push-dominoes.html)***