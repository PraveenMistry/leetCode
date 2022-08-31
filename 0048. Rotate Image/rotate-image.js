/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    for(let x=0; x<Math.ceil(n/2); x++){
	  for(let y=x; y<n-x-1; y++){
	   let temp = matrix[x][y];
	   matrix[x][y] = matrix[n-1-y][x];
	   matrix[n-1-y][x] = matrix[n-1-x][n-1-y];
	   matrix[n-1-x][n-1-y] = matrix[y][n-1-x];
	   matrix[y][n-1-x] = temp;
	  }
 	}
 return matrix;
};

/*

Swap 

*/

/*
Runtime: 96 ms
*/