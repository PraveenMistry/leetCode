/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map();
    for(let i=0;i<numbers.length;i++){
        if(map.has(target - numbers[i])){
            return [map.get(target - numbers[i])+1, i+1]
        }
        map.set(numbers[i], i);
    }
    return [-1,-1]
};

/*
Runtime: 89 ms, faster than 61.59% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43 MB, less than 62.77% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
*/