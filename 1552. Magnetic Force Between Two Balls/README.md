### 1552. Magnetic Force Between Two Balls

###### Level Medium

In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that ###### the minimum magnetic force between any two balls is maximum.

Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

Given the integer array position and the integer m. Return the required force.

 

Example 1:
```JS
Input: position = [1,2,3,4,7], m = 3
Output: 3
```

Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.


Example 2:
```JS
Input: position = [5,4,3,2,1,1000000000], m = 2
Output: 999999999
```

Explanation: We can use baskets 1 and 1000000000.
 

Constraints:
```JS
n == position.length
2 <= n <= 105
1 <= position[i] <= 109
All integers in position are distinct.
2 <= m <= position.length
```

Note
```JS
- Relating this question to Agressive Cows Question 
[Agressive Cows](https://www.codingninjas.com/codestudio/problems/aggressive-cows_1082559)

- The minimum magnetic force between any two balls is maximum : This kind of statement suggested that we have to go for search space (binary search)
```


### 109. Aggressive Cows (codingninjas)

Given an array of length ‘N’, where each element denotes the position of a stall. Now you have ‘N’ stalls and an integer ‘K’ which denotes the number of cows that are aggressive. To prevent the cows from hurting each other, you need to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. Return the largest minimum distance.


##### Input Format:

The first line contains a single integer ‘T’ denoting the number of test cases.

The first line of each test case contains two integers ‘N’ and ‘K’ denoting the number of elements in the array/list and the number of aggressive cows.

The second line contains ‘N’ single space-separated integers denoting the elements of the array.


##### Output format :
For each test case, print the majority element in a separate line.


##### Constraints :

```JS
1 <= T <= 5
2 <= N <= 20000
2 <= C <= N
0 <= ARR[i] <= 10 ^ 9
```

Where ‘T’ is the number of test cases, 'N' is the length of the given array and, ARR[i] denotes the i-th element in the array.

Time Limit: 1 sec.


Sample Input 1 :
```JS
2
3 2
1 2 3
5 2
4 2 1 3 6
```

Sample Output 1 :
```JS
2
5
```

Explanation To Sample Input 1 :
In the first test case, the largest minimum distance will be 2 when 2 cows are placed at positions {1, 3}.

In the second test case, the largest minimum distance will be 5 when 2 cows are placed at positions {1, 6}.


Sample Input 2 :
```JS
2
6 4
0 3 4 7 10 9
6 3
0 4 3 7 10 9
```

Sample Output 2 :
```JS
3
4
```

Explanation To Sample Input 2 :
In the first test case, the largest minimum distance will be 3 when 4 cows are placed at positions {0, 3, 7, 10}.

In the second test case, the largest minimum distance will be 4 when 3 cows are placed at positions {0, 4, 10}.