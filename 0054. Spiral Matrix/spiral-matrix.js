/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    if (!matrix.length) {
        return result;
    }
    \
    
    let rowBeg = 0
    let rowEnd = matrix.length - 1
    let colBeg = 0
    let colEnd = matrix[0].length - 1
    
    while (rowBeg <= rowEnd && colBeg <= colEnd) {
        for (let i = colBeg; i <= colEnd; i++) {
            result.push(matrix[rowBeg][i])
        }
        rowBeg++
        for (let i = rowBeg; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd])
        }
        colEnd--
        if (rowBeg <= rowEnd) {
            for (let i = colEnd; i >= colBeg; i--) {
                result.push(matrix[rowEnd][i])
            }
            rowEnd--
        }
        
        if (colBeg <= colEnd) {
            for (let i = rowEnd;i >= rowBeg; i--) {
                result.push(matrix[i][colBeg])
            }
            colBeg++
        }
    }
    return result
};

/*
Runtime: 136 ms, faster than 5.34% of JavaScript online submissions for Spiral Matrix.
Memory Usage: 41.9 MB, less than 61.83% of JavaScript online submissions for Spiral Matrix.
*/


