/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let len = r * c -1;
    if(len != mat.length *  mat[0].length -1){
        return mat;
    }
    let res = [];
    // creating two dimensional array
    for (var i = 0; i < r; i++) {
      res[i] = new Array(c);
    }
    let rowIndex = 0;
    let colIndex = 0;
    let count = 0;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            res[rowIndex][colIndex++] =  mat[i][j];
            count++;
            if(count == c){
                rowIndex++;
                colIndex = 0;
                count = 0;
            }
            
        }
    }
     return res;
};

/*
Runtime: 87 ms, faster than 92.74% of JavaScript online submissions for Reshape the Matrix.
Memory Usage: 44.4 MB, less than 97.89% of JavaScript online submissions for Reshape the Matrix.
*/