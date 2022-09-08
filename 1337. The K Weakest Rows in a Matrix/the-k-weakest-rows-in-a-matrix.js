/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let row = mat.length;
    let col = mat[0].length;
    let countHash = {};
    for(let i=0;i<row;i++){
        let count = 0;
        let row = mat[i];
        countHash[i] = row.reduce((previousValue, currentValue) => previousValue + currentValue,0);
    }
    let entries = Object.entries(countHash);
    let sorted = entries.sort((a, b) => a[1] - b[1]);
    let result = [];
    for(let i=0;i<k;i++){
        result.push(sorted[i][0]);
    }
    return result;
};

/*
Runtime: 118 ms, faster than 19.21% of JavaScript online submissions for The K Weakest Rows in a Matrix.
Memory Usage: 43.6 MB, less than 95.97% of JavaScript online submissions for The K Weakest Rows in a Matrix.
*/