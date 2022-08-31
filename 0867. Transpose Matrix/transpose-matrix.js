/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let res = [];

    // creating two dimensional array
    for (var i = 0; i < col; i++) {
      res[i] = new Array(row);
    }
    
    for(let i=0;i<col;i++){
        for(let j=0;j<row;j++){
            res[i][j] = matrix[j][i];
        }
    }
    return res;
};

/*
Runtime: 103 ms, faster than 54.73% of JavaScript online submissions for Transpose Matrix.
Memory Usage: 45.1 MB, less than 10.58% of JavaScript online submissions for Transpose Matrix.
*/