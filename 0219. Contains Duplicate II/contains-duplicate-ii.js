/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let has = new Map()
    for(let i=0;i<nums.length;i++){
        let item = nums[i];
        if(has.has(item)){
            if(Math.abs(has.get(item) - i) <= k){
                return true;
            }
        }
        has.set(item, i)
    }
    return false;
};

/*
Runtime: 161 ms, faster than 70.72% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 67 MB, less than 28.94% of JavaScript online submissions for Contains Duplicate II.
*/