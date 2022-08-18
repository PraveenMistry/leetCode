/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sumOfNums = 0;
    let sum = parseInt((nums.length * (nums.length + 1))/2);
    for(let i=0;i<nums.length;i++){
        sumOfNums+=nums[i];
    }
    return sum - sumOfNums;
};

/*
Runtime: 77 ms, faster than 90.26% of JavaScript online submissions for Missing Number.
Memory Usage: 44.3 MB, less than 70.05% of JavaScript online submissions for Missing Number.
*/