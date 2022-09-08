/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result =  Array.from({length: nums.length}, (item, index) => index+1);
    for(let i=0;i<nums.length;i++){
        let index =  result.indexOf(nums[i]);
        if(index > -1){
            result.splice(index, 1); 
        }
    }
    return result;
};