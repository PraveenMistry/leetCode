/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[counter++] = nums[i];
        }
    }
    while(counter<nums.length){
        nums[counter++] = 0;
    }
};

/*
Runtime: 165 ms
*/

// OR


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = function(nums, x,y){
	var tmp = nums[x];
	nums[x] = nums[y];
	nums[y] = tmp;
}

var moveZeroes = function(nums) {
    let counter = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!==0){
            swap(nums, counter++,i);
        }
    }
};

/*
Runtime: 91 ms
*/