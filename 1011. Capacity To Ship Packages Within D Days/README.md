### [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

###### Level Medium

A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). ***We may not load more weight than the maximum weight capacity of the ship.*** (Binary Search)

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

 

###### Example 1:
```JS
Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
```

###### Explanation: 
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

***Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.*** (Binary Search - continuous array)


Example 2:

Input: 
```JS
weights = [3,2,2,4,1,4], days = 3
```

Output: 
```JS
6
```
###### Explanation: 
A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4


Example 3:

Input: 
```JS
weights = [1,2,3,1,1], days = 4
```

Output: 
```JS
3
```
###### Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
 

###### Constraints:
```JS
1 <= days <= weights.length <= 5 * 104
1 <= weights[i] <= 500
```

###### Note:
Same As a book allocation problem



### [174. Allocate Books](https://www.codingninjas.com/codestudio/problems/allocate-books_1090540)

###### Problem Statement

Given an array ‘arr’ of integer numbers . where ‘arr[i]’ represents the number of pages in the ‘i-th’ book. There are  ‘m’ number of students and the task is to allocate all the books to their students. Allocate books in such a way that:


1. Each student gets at least one book.
2. Each book should be allocated to a student.
3. Book allocation should be in a contiguous manner.


You have to allocate the book to ‘m’ students such that ***the maximum number of pages assigned to a student is minimum.*** (Binary Search)

###### Example:

Let’s consider ‘n=4’ (number of books ) and ‘m=2’ (number of students).

```JS 
	arr = { 10, 20, 30, 40 }’.
```

```JS
All possible way to allocate the ‘4’ books in ‘2’ number of students is -

10 | 20, 30, 40 - sum of all the pages of books which allocated to student-1  is ‘10’, and student-2 is ‘20+ 30+ 40 = 90’ so maximum is ‘max(10, 90)= 90’.

10, 20 | 30, 40 - sum of all the pages of books which allocated to student-1 is ‘10+ 20 = 30’, and student-2 is ‘30+ 40 = 70’ so maximum is ‘max(30, 70)= 70’.

10, 20, 30 | 40 - sum of all the pages of books which allocated to student-1 is ‘10+ 20 +30 = 60’, and student-2 is ‘40’ so maximum is ‘max(60, 40)= 60’.
```

So possible maximum number of pages which allocated to a single student is { 90, 70, 60 }.

But you have to return a minimum of this so return ‘min(90,70,60) =60’.

###### Note:
1. Do not print anything, just return the maximum number of pages that are assigned to a student is minimum.
2. If it is not possible to assign the ‘n’ books to ‘m’ students then return ‘-1’.


Sample Input 1:
```JS
2
4 2
12 34 67 90
4 4
5 17 100 11
```
Sample Output 1:
```JS
113
100
```

###### Explanation Of Sample Input 1:

Test Case 1:

Let’s consider ‘n=4’ (number of books ) and ‘m=2’ (number of students)
```JS 
	arr = { 12, 34, 67, 90 }’. And ‘m= 2’.
```

```JS
All possible way to allocate the ‘4’ books in ‘2’ number of students is-

12 | 34, 67, 90 - sum of all the pages of books which allocated to student 1 is ‘12’, and student two is ‘34+ 67+ 90 = 191’ so maximum is ‘max(12, 191)= 191’.
12, 34 | 67, 90 - sum of all the pages of books which allocated to student 1 is ‘12+ 34 = 46’, and student two is ‘67+ 90 = 157’ so maximum is ‘max(46, 157)= 157’.
12, 34, 67 | 90 - sum of all the pages of books which allocated to student 1 is ‘12+ 34 +67 = 113’, and student two is ‘90’ so maximum is ‘max(113, 90)= 113’.
```

So possible maximum number of pages which allocated to a single student is { 191, 157, 113 } 
But you have to return a minimum of this so return ‘min(191,157, 113) =113’.

Hence answer is ‘113’.



Test Case 2:

```JS
	arr = { 5, 17, 100, 11 }’. And ‘m=4’.
```

Only one is possible to allocate the ‘4’ books in ‘4’ student is 

5 | 17 | 100 | 11 - maximum is ‘max(5, 17, 100, 11)= 100’.

Hence answer is ‘100’.



Sample Input 2:
```JS
2
5 4
25 46 28 49 24
3 2
10 10 20
```

Sample Output 2:
```JS
71
```
20




### 89. (Painter's Partition Problem)[https://www.codingninjas.com/codestudio/problems/painter-s-partition-problem_1089557]

Given an array/list of length ‘N’, where the array/list represents the boards and each element of the given array/list represents the length of each board. Some ‘K’ numbers of painters are available to paint these boards. Consider that each unit of a board takes 1 unit of time to paint.

***You are supposed to return the area of the minimum time to get this job done of painting all the ‘N’ boards under a constraint that any painter will only paint the continuous sections of boards.*** (Binary Search)

For example :
```JS
In the below figure where array/list elements are {2, 1, 5, 6, 2, 3}.
```


***A painter can paint blocks {5,6} or {1,5,6,2} together but not {2,5,6} or {5,6,3}.*** - continuous way

Input format :
The first line contains a single integer ‘T’ denoting the number of test cases.

The first line of each test case contains two integers ‘N’ and ‘K’ denoting the number of elements in the array/list and number of painters available.

The second line contains ‘N’ single space-separated integers denoting the elements of the array/list.

Output format :
For each test case, print the minimum time required to get the job done.


Note: You do not need to print anything; it has already been taken care of.

```JS
Constraints :
1 <= T <= 5
1 <= N <= 10^4
1 <= K <= N
1 <= ARR[i] <= 10^5
```

Where ‘T’ is the number of test cases.
'N' is the length of the given array/list (boards).
‘K’ is the number of painters available.
And, ARR[i] denotes the i-th element in the array/list.

Time Limit: 1 sec.

Sample Input 1 :
```JS
2
4 2
5 5 5 5
4 2
10 20 30 40
```
Sample Output 1 :
```JS
10
60
```

##### Explanation For Sample Input 1 :
```JS
In the first test case, we can divide the boards into 2 equal-sized partitions, 
so each painter gets 10 units of the board and the total time taken is 10.
```

In the second test case, we can divide the first 3 boards for one painter and the last board for the second painter.

Sample Input 2 :
```JS
2
2 2
48 90
4 2
1 2 3 4
```
Sample Output 2 :
```JS
90
6
```



Note: 
- Similar problem as 175. book allocation (codingninjas)[https://www.codingninjas.com/codestudio/problems/allocate-books_1090540]
- Similar problem as 1011. capacity to ship packages (leetcode)[https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/]
- Similar problem as 89. (Painter's Partition Problem)[https://www.codingninjas.com/codestudio/problems/painter-s-partition-problem_1089557]
