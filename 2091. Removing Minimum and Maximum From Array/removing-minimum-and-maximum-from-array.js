/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let len = nums.length;
    if(len == 1){
        return 1;
    }
    let min_index = 0;
    let max_index = 0;
    
    for(let i=0;i<len;i++){
        if(nums[i] > nums[max_index]){
            max_index = i;
        }
        if(nums[i] < nums[min_index]){
            min_index = i;
        }
    }
    
    let left = Math.min(min_index,max_index);// left position
    let right = Math.max(min_index,max_index);// right position


    // There are three case 
    // case 1-  remove both from front.
    let ans1=right+1;

    // case 2-  remove both from back.
    let ans2=len-left;

    // case 3-  remove from front and back.
    let ans3=len-(right-left-1);

    return Math.min(ans1,Math.min(ans2,ans3));
};
/*
Runtime: 79 ms, faster than 100.00% of JavaScript online submissions for Removing Minimum and Maximum From Array.
Memory Usage: 53.5 MB, less than 100.00% of JavaScript online submissions for Removing Minimum and Maximum From Array
*/

