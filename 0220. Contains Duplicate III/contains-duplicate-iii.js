/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
   for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])<=t && (Math.abs(i-j)<=k)){
                return true;
            }
        }
   }
    return false;
};

/*
Runtime: 1277 ms, faster than 30.33% of JavaScript online submissions for Contains Duplicate III.
Memory Usage: 42.4 MB, less than 97.33% of JavaScript online submissions for Contains Duplicate III.
*/
