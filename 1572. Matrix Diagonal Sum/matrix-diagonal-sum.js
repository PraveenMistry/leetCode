/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum=0;
    let n= mat.length;
    
    for(let i=0;i<n;i++){
        sum = sum + mat[i][i] + mat[i][n-i-1];
    }
    if(n % 2 == 0){
        return sum;
    }else 
        return sum - mat[parseInt(n/2)][parseInt(n/2)];
};

/*
Runtime: 118 ms, faster than 13.05% of JavaScript online submissions for Matrix Diagonal Sum.
Memory Usage: 44.2 MB, less than 16.17% of JavaScript online submissions for Matrix Diagonal Sum.
*/