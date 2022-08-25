/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    let subArray = [];
    let len = nums.length;
    let counter = 0;
    k = k % len;
    for(let i=0;i<len-k;i++){
        subArray.push(nums.shift());
    }
    for(let i=k;i<len;i++){
        nums.push(subArray[counter++]);
    }
};


// OR

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    let n = nums.length;
    let v = nums.slice()
    for(let i=0;i<nums.length;i++){
      nums[(i+k)%n]=v[i];
    }
};

/*
Runtime: 200 ms, faster than 6.43% of JavaScript online submissions for Rotate Array.
Memory Usage: 51.2 MB, less than 84.20% of JavaScript online submissions for Rotate Array.
*/