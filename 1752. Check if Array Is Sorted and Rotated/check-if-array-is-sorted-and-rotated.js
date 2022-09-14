/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
    let n = nums.length;
    for(let i=1;i<n;i++){
        if(nums[i-1] > nums[i]){
            count++;
        }
        if(count > 1){
            return false;
        }
    }
    
    if(nums[n-1] > nums[0]){
        count++;
    }
    if(count <= 1){
        return true
    }
    return false;
};

/*
Runtime: 66 ms, faster than 90.63% of JavaScript online submissions for Check if Array Is Sorted and Rotated.
Memory Usage: 41.7 MB, less than 91.41% of JavaScript online submissions for Check if Array Is Sorted and Rotated.
*/