/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
        
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (nums[mid] == target) return true;

        if (nums[mid] < nums[start]) {
            if (nums[mid] < target && nums[end] >= target) start = mid + 1;
            else end = mid - 1;
        } else if (nums[mid] > nums[start]) {
            if (nums[mid] > target && nums[start] <= target) end = mid - 1;
            else start = mid + 1;
        } else {
            start++;
        }
    }
    return false;
};

/*
Runtime: 85 ms, faster than 70.45% of JavaScript online submissions for Search in Rotated Sorted Array II.
Memory Usage: 42.5 MB, less than 57.69% of JavaScript online submissions for Search in Rotated Sorted Array II.
*/