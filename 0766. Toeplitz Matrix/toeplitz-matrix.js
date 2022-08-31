/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let row = matrix[0].length;
    let col = matrix.length;
    for(let i=1;i<col;i++){
        for(let j=1;j<row;j++){
            if(matrix[i][j] != matrix[i-1][j-1]){
                return false
            }
        }
    }
    
    return true;
};


/*
Diagonal:
Indexes :   [{0,0},{1,1},{2,2}], 
            [{0,2},{1,3},{2,4}], 
            [{0,3},{1,4}], 
            [{0,4}],
            [{1,0},{2,1}],
            [{2,0}]
*/

/*
Runtime: 132 ms, faster than 12.64% of JavaScript online submissions for Toeplitz Matrix.
Memory Usage: 44 MB, less than 70.05% of JavaScript online submissions for Toeplitz Matrix.
*/