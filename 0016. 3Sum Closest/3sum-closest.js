/*
    Approach: Brute Force
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
    if(nums.length < 3) {
        return 0;
    }

    nums.sort(function(a,b) {
        return a-b;
    })

    let i = 0, minDiff = Number.MAX_VALUE;
    let sum;

    while( i < nums.length - 2 ){
        let left = i + 1;
        let right = nums.length - 1

        while( right > left ){
            let temp = nums[i] + nums[left] + nums[right];
            let diff = Math.abs(temp - target);

            if( diff == 0 ){
                return temp;
            }
            
            if( diff < minDiff ){
                minDiff = diff;
                sum = temp;
            }
            if( temp < target ){
                left++;
            } else {
                right--;
            }
        }
        i++;
    }

    return sum;
};


