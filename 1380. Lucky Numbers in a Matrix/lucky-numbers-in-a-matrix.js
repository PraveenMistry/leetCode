/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;
    let minRow = new Array(r).fill(Number.MAX_VALUE);
    let maxCol = new Array(c).fill(Number.MIN_VALUE);
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(minRow[i] >= matrix[i][j]) {
                minRow[i] = matrix[i][j];
            }
        }
    }
    for(let i=0;i<c;i++){
        for(let j=0;j<r;j++){
            if(maxCol[i] <= matrix[j][i]){
                maxCol[i] = matrix[j][i];
            }
        }
    }
    for(let i=0;i<minRow.length;i++){
        if(maxCol.includes(minRow[i])){
           return [minRow[i]];
        }
    }
    return [];
};


/*
Runtime: 90 ms, faster than 69.85% of JavaScript online submissions for Lucky Numbers in a Matrix.
Memory Usage: 44.9 MB, less than 33.82% of JavaScript online submissions for Lucky Numbers in a Matrix.
*/