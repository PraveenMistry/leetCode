/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix[0].length; // column length
    let n = matrix.length; // row length
    
    let i = 0; // first row
    let j = m-1; // last column
    
    // till i < n (row o to n) AND j >= 0 (col m to 0)
    while(i<n && j>=0){ 
        if(matrix[i][j] == target){
            return true;
        }
        if(matrix[i][j] > target){
            // we'll be moving towards left if the value of target is smaller 
            j--;
        }else{
            // otherwise we'll be moving downwards if the target is greater than
            i++;
        }
    }
    return false;
};

/*

*/