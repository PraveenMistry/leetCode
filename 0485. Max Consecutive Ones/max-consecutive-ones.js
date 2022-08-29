/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = 0;
    let sum = 0;

    for (let i=0;i<nums.length;i++){
        let num = nums[i];
        if (num == 1){
            ans = Math.max(ans, ++sum);
        }
        else{
            sum = 0;
        }
    }

    return ans;
};

/*

Runtime: 137 ms, faster than 11.76% of JavaScript online submissions for Max Consecutive Ones.
Memory Usage: 44.3 MB, less than 77.83% of JavaScript online submissions for Max Consecutive Ones.

*/