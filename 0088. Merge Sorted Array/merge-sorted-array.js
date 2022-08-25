/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
*/

let merge = function(nums1, m, nums2, n) {
    let arr = [...nums1]
    let i = 0;
    let j = 0;
    let k = 0;
    
    while(i<m && j<n) {
        if(arr[i] < nums2[j]) {
            nums1[k++] = arr[i++]
        } else {
            nums1[k++] = nums2[j++]
        }
    }
    
    while(i<m) {
        nums1[k++] = arr[i++]
    }
    while(j<n) {
        nums1[k++] = nums2[j++]
    }
};
/*
Runtime: 94 ms, faster than 43.95% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 41.8 MB, less than 84.34% of JavaScript online submissions for Merge Sorted Array.
*/