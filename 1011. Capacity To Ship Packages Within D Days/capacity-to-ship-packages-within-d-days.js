/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const isCapacityFull = function(weights, mid, days){
    let dayCount = 1;
    let capacity = 0;
    for(let i=0;i<weights.length;i++){
        if(capacity + weights[i] <= mid){
           capacity += weights[i];
        }else{
            dayCount++;
            if(dayCount > days || weights[i] > mid){
                return false;
            }
            capacity = weights[i];
        }
    }
    return true;
}

var shipWithinDays = function(weights, days) {
    let start = 0
    let end = 0;
    let ans = -1;
    for(let i=0;i<weights.length;i++){
        end+=weights[i];
    }
    let mid = start + parseInt((end - start)/2);
    
    while(start <= end){
        
        if(isCapacityFull(weights, mid, days)){
            ans = mid;
            end = mid - 1;
        }else{
            start = mid +1;
        }
        
        mid = start + parseInt((end - start)/2);
    }
    return ans;
    
};

/*
Runtime: 148 ms, faster than 22.47% of JavaScript online submissions for Capacity To Ship Packages Within D Days.
Memory Usage: 45.7 MB, less than 41.20% of JavaScript online submissions for Capacity To Ship Packages Within D Days.
*/