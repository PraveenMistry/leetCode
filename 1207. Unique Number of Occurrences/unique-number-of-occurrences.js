/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hash = {};
    let occurrences = new Set();
    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]] != undefined){
             hash[arr[i]] += 1;
        }else{
            hash[arr[i]] = 1;
        }
    }
    
    for(let count in hash){
        if(occurrences.has(hash[count])){
            return false;
        }
        occurrences.add(hash[count])
    }
    return true;
};

/*
Runtime: 90 ms, faster than 54.60% of JavaScript online submissions for Unique Number of Occurrences.
Memory Usage: 42.9 MB, less than 46.10% of JavaScript online submissions for Unique Number of Occurrences.
*/