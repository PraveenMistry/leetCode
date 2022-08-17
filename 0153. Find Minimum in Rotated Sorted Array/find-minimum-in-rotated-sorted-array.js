/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start =0;
    let end = nums.length-1;
    let mid = start + parseInt((end - start)/2);
    let min = Number.MAX_VALUE;
    while(start <= end){
        if(min > nums[mid]){
            min = nums[mid];
        }
        if(nums[mid] > nums[nums.length-1]){
            start = mid + 1;
        }else{
            end = mid -1;
        }
        mid = start + parseInt((end - start)/2)
    }
    return min == Number.MAX_VALUE ? -1 : min;
};

/*

Approach: Binary Search
Runtime: 124 ms, faster than 5.88% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
Memory Usage: 42.4 MB, less than 23.35% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.

*/