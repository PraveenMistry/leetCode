/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const isPossible = function(bloomDay, m, k, mid){
    let flowerCount = 0;
    let bouquets = 0;
    for(let i=0;i<bloomDay.length;i++){
        if(bloomDay[i] <= mid){
           flowerCount++;
            if(flowerCount == k){
                bouquets++;
                flowerCount = 0;
            }
        }else{
            flowerCount = 0;
        }
    }
    return bouquets >= m;
}

var minDays = function(bloomDay, m, k) {
    
    // case 2
    if(m * k > bloomDay.length){
         return -1;
    }
    
    let start = 0;
    let end = Math.max(...bloomDay);
    let mid = start + parseInt((end - start)/2);
    let ans =-1;
    while(start <= end){
        mid = start + parseInt((end - start)/2);
        if(isPossible(bloomDay, m, k, mid)){
           ans = mid;
           end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
};

/*
Runtime: 170 ms, faster than 54.05% of JavaScript online submissions for Minimum Number of Days to Make m Bouquets.
Memory Usage: 52.6 MB, less than 47.75% of JavaScript online submissions for Minimum Number of Days to Make m Bouquets.
*/