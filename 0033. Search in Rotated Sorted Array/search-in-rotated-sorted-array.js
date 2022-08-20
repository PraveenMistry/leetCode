/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
mid =  left + ((right - left)/2)
*/

// Approach : Recursion + Binary Search

let binarySearch = function(nums, left, right, target){
    let mid = Math.floor(left+((right-left)/2));
    if(left > right){
        return -1;
    }
    
    if(nums[mid]==target){
        return mid;
    }
    
    if(nums[left] <= nums[mid] && target <= nums[mid] && target >= nums[left]){
        return binarySearch(nums, left, right -1, target);
    }
    else if(nums[mid] <= nums[right] && target >= nums[mid] && target <= nums[right]){
        return binarySearch(nums, left + 1, right, target);
    }
    else if (nums[right] <= nums[mid]) {
        return binarySearch(nums, mid+1, right, target);
    }
    else if (nums[left] >= nums[mid]) {
        return binarySearch(nums, left, mid-1, target);
    }
    else{
        return -1;
    }
    
}

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    if(!nums){ return -1;}
    return binarySearch(nums, left, right, target);
};

/*
Runtime: 237 ms
*/