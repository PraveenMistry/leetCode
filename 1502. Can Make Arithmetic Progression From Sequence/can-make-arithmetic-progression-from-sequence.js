/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort(function(a, b) {
      if( a === Infinity ) 
        return 1; 
      else if( isNaN(a)) 
        return -1;
      else 
        return a - b;
    });
    let diff = arr[1] - arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1] != diff){
            return false;
        }
    }
    return true;
};

/*

Steps]
1) sort array
2) check diff of current and next if not matched return false 
*/

/*
Runtime: 104 ms, faster than 37.36% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
Memory Usage: 42.5 MB, less than 31.51% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
*/