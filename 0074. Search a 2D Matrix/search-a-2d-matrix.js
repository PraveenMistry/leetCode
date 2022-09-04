// A) Binary Search

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0;
    let m = matrix[0].length; // col
    let n = matrix.length; // row
    let end = m*n-1;
    let mid = start + parseInt((end - start)/2);
    while(start <= end){
        let col = mid % m;
        let row = parseInt(mid / m);
        if(matrix[row][col] == target){
            return true;
        }
        if(matrix[row][col] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
        mid = start + parseInt((end - start)/2);
    }
    return false;
};

/*

*/


// B) UP - DOWN Approach


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