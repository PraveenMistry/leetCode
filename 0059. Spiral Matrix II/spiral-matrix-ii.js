/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = [];
    // creating two dimensional array
    for (var i = 0; i < n; i++) {
      result[i] = new Array(n);
    }
    let val = 1;
 
    let rowBeg = 0
    let rowEnd = n - 1
    let colBeg = 0
    let colEnd = n - 1
    
    while (rowBeg <= rowEnd && colBeg <= colEnd) {
        for (let i = colBeg; i <= colEnd; i++) {
            result[rowBeg][i] = val++;
        }
        rowBeg++
        for (let i = rowBeg; i <= rowEnd; i++) {
             result[i][colEnd] = val++;
        }
        colEnd--
        if (rowBeg <= rowEnd) {
            for (let i = colEnd; i >= colBeg; i--) {
                result[rowEnd][i] = val++;
            }
            rowEnd--
        }
        
        if (colBeg <= colEnd) {
            for (let i = rowEnd;i >= rowBeg; i--) {
                 result[i][colBeg] = val++;
            }
            colBeg++
        }
    }
    return result
};

/*

*/