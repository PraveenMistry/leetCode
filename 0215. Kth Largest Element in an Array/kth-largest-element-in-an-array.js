/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // find the largest element
    let largest = -Infinity;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] > largest) largest = nums[i];
    }
    
    // construct a hash map of difference between nums[i] and largest
    const hash = {};
    
    for(let i=0;i<nums.length;i++){
        const diff = largest-nums[i];
        hash[diff] = (hash[diff] || 0) + 1;
    }
    // find kth largest number
    let count = 0;
    let diff = 0;
    while(count<k){
        count += (hash[diff] || 0);
        diff++;
    }
    return largest - diff + 1;
};

/*
Runtime: 131 ms, faster than 52.26% of JavaScript online submissions for Kth Largest Element in an Array.
Memory Usage: 51.1 MB, less than 20.23% of JavaScript online submissions for Kth Largest Element in an Array.
*/