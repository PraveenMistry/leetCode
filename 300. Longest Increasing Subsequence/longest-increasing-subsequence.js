/**
 * @param {number[]} nums
 * @return {number}
 */

// Complexcity: O(n*n)

var lengthOfLIS = function(nums) {
    let list = Array(nums.length).fill(1);
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if (nums[j] < nums[i]){
                list[i] = Math.max(list[i], list[j] + 1);
            }
        }
    }
    let ans = list[0];
    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(ans, list[i]);
    }
    return ans;
};

/*

Runtime: 308 ms, faster than 22.24% of JavaScript online submissions for Longest Increasing Subsequence.
Memory Usage: 43.4 MB, less than 88.04% of JavaScript online submissions for Longest Increasing Subsequence.

*/