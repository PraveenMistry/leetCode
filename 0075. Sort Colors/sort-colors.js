/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i, cnt0 = 0, cnt1 = 0, cnt2 = 0, n = nums.length;
        for (i = 0; i < n; i++) {
            switch (nums[i]) {
                case 0:
                    cnt0++;
                    break;
                case 1:
                    cnt1++;
                    break;
                case 2:
                    cnt2++;
                    break;
            }
        }
        i = 0;
        while (cnt0 > 0) {
            nums[i++] = 0;
            cnt0--;
        }
        while (cnt1 > 0) {
            nums[i++] = 1;
            cnt1--;
        }
        while (cnt2 > 0) {
            nums[i++] = 2;
            cnt2--;
        }
};

/*
Runtime: 84 ms, faster than 61.86% of JavaScript online submissions for Sort Colors.
Memory Usage: 42 MB, less than 64.67% of JavaScript online submissions for Sort Colors.
*/

// OR 

// Binary Search Approach

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length < 2){
        return nums;
    }
    let start = 0;
    let mid = 0;
    let end = nums.length-1;
    while(mid <= end){
        if(nums[mid] == 0){
            let temp = nums[mid];
            nums[mid] = nums[start];
            nums[start] = temp;
            start++;
            mid++;
        }else if(nums[mid] == 1){
            mid++;
        }else if(nums[mid] == 2){
            let temp = nums[mid];
            nums[mid] = nums[end];
            nums[end] = temp;
            end--;
        }
    }
    return nums;
};

/*
Runtime: 84 ms, faster than 61.86% of JavaScript online submissions for Sort Colors.
Memory Usage: 42.2 MB, less than 52.31% of JavaScript online submissions for Sort Colors.
*/