/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // integers list
    while(--n > 0){
        let tmp = [];
        for(let val of list){
            let rem = val % 10;
            if(rem + k < 10){    // map digit by digit
                tmp.push(val * 10 + rem + k);
            }
            if(k != 0 && rem - k >= 0)  { // map digit by digit
                tmp.push(val * 10 + rem - k)
            }
        }
        list = tmp;
    }
    return list
};

/*
Runtime: 77 ms, faster than 88.89% of JavaScript online submissions for Numbers With Same Consecutive Differences.
Memory Usage: 43.8 MB, less than 61.11% of JavaScript online submissions for Numbers With Same Consecutive Differences.
*/