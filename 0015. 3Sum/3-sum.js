/*
    Approach: Brute Force
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    if(!nums || nums.length < 3){
        return []
    }
    
    nums.sort(function(a, b) {
        return a - b;
    });

    var result = [];
    var duplicate = [];
    let count = 0;
    for(let i=0;i<nums.length;i++){
        let s = i+1; // start
        let e = nums.length-1; // end
        while(s < e){
            let sum = nums[i]+nums[s]+nums[e];
            if(sum == 0){
                if(!duplicate.includes(([nums[i],nums[s],nums[e]]).toString())){
                    result[count] = [nums[i],nums[s],nums[e]];
                    count++;
                    duplicate[count] = [nums[i],nums[s],nums[e]].toString();
                }
                s++;
                e--;
            }else if(sum > 0){
                e--;
            }else{
                s++;
            }
        } 
    }
    
    return result;
};


/*
Runtime: 1947 ms
Memory Usage: 61.4 MB
*/



