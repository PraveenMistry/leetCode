/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(target-nums[i]) !== -1 && nums.indexOf(target-nums[i]) !== i){
            result.push(i);
            result.push(nums.indexOf(target-nums[i]));
            break;
        }
    }
    return result;
};

// OR

var twoSum = function(nums, target) {
    let testHash = new Map();
    for(let k=0; k<nums.length; k++){
        if (testHash.has(target - nums[k])){
            return [ testHash.get(target - nums[k]), k ]
        }
        testHash.set(nums[k], k)
    }
};
