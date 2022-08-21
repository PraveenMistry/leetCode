/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    for(let i=0; i<arr.length; i++){
        if(k>=arr[i]) k++;
        else break;
    }
    return k;
};


/*

O(n)

Runtime: 93 ms, faster than 56.82% of JavaScript online submissions for Kth Missing Positive Number.
Memory Usage: 41.9 MB, less than 95.45% of JavaScript online submissions for Kth Missing Positive Number.
*/


// Binary Search Approach

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let s = 0;
    let e = arr.length-1;

    while(s<=e){
        let mid = s + parseInt((e-s) / 2);
        if(arr[mid] - (mid+1) >= k){
            e = mid-1;
        }else{
            s = mid+1;
        }

    }
    return s+k;
};

/*
Runtime: 88 ms, faster than 66.36% of JavaScript online submissions for Kth Missing Positive Number.
Memory Usage: 42.4 MB, less than 57.27% of JavaScript online submissions for Kth Missing Positive Number.
*/