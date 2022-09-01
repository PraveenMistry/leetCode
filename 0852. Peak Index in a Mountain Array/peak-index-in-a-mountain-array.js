/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length-1;
    let mid = start + parseInt((end - start)/2);
    let ans = -1;
    while(start < end){
        if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            ans = mid;
            break;
        }
        
        if(arr[mid] < arr[mid + 1])
            start = mid + 1;
        else 
            end = mid;
        
        mid = start + parseInt((end - start)/2);
    }
    return ans;
};

/*
Runtime: 86 ms, faster than 74.88% of JavaScript online submissions for Peak Index in a Mountain Array.
Memory Usage: 51.4 MB, less than 30.88% of JavaScript online submissions for Peak Index in a Mountain Array.
*/