/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   let maxValue = null, secondMaxValue = null, thirdMaxValue = null;
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        if(num == maxValue || num == secondMaxValue || num == thirdMaxValue)
            continue;
        
        if(maxValue == null || num > maxValue){
            thirdMaxValue = secondMaxValue;
            secondMaxValue = maxValue;
            maxValue = num;
        }
        else if(secondMaxValue == null || num > secondMaxValue){
            thirdMaxValue = secondMaxValue;
            secondMaxValue = num;
        }
        else if(thirdMaxValue == null || num > thirdMaxValue)
            thirdMaxValue = num;
    }
    if(thirdMaxValue == null){
        thirdMaxValue = maxValue
    }
    return thirdMaxValue;
};

/*
Runtime: 101 ms, faster than 47.91% of JavaScript online submissions for Third Maximum Number.
Memory Usage: 42.7 MB, less than 78.07% of JavaScript online submissions for Third Maximum Number.
*/