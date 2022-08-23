/*
A) Brute Force, O(n^2)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let sum =  nums[0];
    if(nums.length == 1){
        return sum;
    }
    for(let i=0;i<nums.length;i++){
        let current = nums[i];
        for(let j=i+1;j<nums.length;j++){
            current = current + nums[j];
            if(current > sum){
                sum = current;
            }
        }
    }
    return sum;
};

/*
B) Kadane's Algorithm, O(n)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum, 0) + nums[i];
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
};

/*

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

Explanation: 

[4,-1,2,1] has the largest sum = 6.


Init sum = 0, maxsum = -2 (nums[0]);

Index      nums[Index]    sum = (Math.max(sum, 0) + nums[i])          maxSum = (Math.max(sum, maxSum))
0             -2                Math.max(0, 0)  + -2   = -2                  (Math.max(-2, -2)) = -2
1              1                Math.max(-2, 0) +  1   =  1                  (Math.max(1, -2))  =  1
2             -3                Math.max(1, 0)  + -3   = -2                  (Math.max(-2, 1))  =  1 
3              4                Math.max(-2, 0) +  4   =  2                  (Math.max(2, 1))   =  2
4             -1                Math.max(2, 0)  + -1   = -1                  (Math.max(-1, 2))  =  2
5              2                Math.max(-1, 2) +  2   =  4                  (Math.max(4, 2))   =  6
6              1                Math.max(4, 0)  +  1   =  5                  (Math.max(5, 6))   =  6
7             -5                Math.max(5, 0)  + -5   =  0                  (Math.max(0, 6))   =  6
8              4                Math.max(0, 0)  +  4   =  4                  (Math.max(4, 6))   =  6


*/


/*
Runtime: 128 ms, faster than 44.47% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 50.5 MB, less than 45.60% of JavaScript online submissions for Maximum Subarray.
*/


// C) Divide and Conquer

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let findSpanMax = (nums, left, mid, right) => {
        if (left === right) return nums[left];
        let max_down = -Infinity, cur_down = 0;
        for (let i = mid; i >= left; i--) {
            cur_down += nums[i];
            max_down = Math.max(cur_down, max_down);
        }
        
        let max_up = -Infinity, cur_up = 0;
        for (let j = mid+1; j <= right; j++) {
            cur_up += nums[j];
            max_up = Math.max(cur_up, max_up);
        }
        return max_down + max_up;
    }
    
    let solve = (nums, left, right) => {
        if (left === right) return nums[left];
        let mid = Math.floor((left + right) / 2);
        let left_max = solve(nums, left, mid);
        let right_max = solve(nums, mid+1, right);
        let span_max = findSpanMax(nums, left, mid, right);
        return Math.max(Math.max(left_max, right_max), span_max);
    }
    
    let tot = nums.length;
    return solve(nums, 0, tot-1);
};


/*
Runtime: 132 ms, faster than 38.93% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 49.9 MB, less than 95.16% of JavaScript online submissions for Maximum Subarray.
*/