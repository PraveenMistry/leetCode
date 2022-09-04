/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
   if(arr.length <= 2 ) return false;
    
        
    let isIncreasing = true;
    let isDecreasing = false;
    
    for(let i = 0; i < arr.length - 1; i++) {         
            if(isIncreasing) {
                if(arr[i] < arr[i+1]) {
                    continue;
                } 
                else if(arr[i] == arr[i+1]) {
                    return false;
                }
                else {
                    // If Array is in decreasing order from start
                    if(i == 0) {
                        return false;
                    }
                    isDecreasing = true;
                    isIncreasing = false;
                    continue;
                }
            }
            
            if(isDecreasing) {
                if(arr[i] > arr[i+1]) {
                    continue;
                }
                else {
                    return false;
                }
            }
        }

        return (isDecreasing) ? true: false;
    
};

/*

*/

// B) Two Pointer

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
   if(arr.length <= 2 ) return false;
    
    let n = arr.length;
    let left = 0, right = n -1;
    while(left + 1 < n - 1 && arr[left + 1] > arr[left]){
        left += 1
    }
        
    while(right - 1> 0 && arr[right - 1] > arr[right]){
        right -= 1
    }   
    return left == right ? true : false;
};


/*

*/
