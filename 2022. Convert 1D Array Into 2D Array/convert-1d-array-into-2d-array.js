/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let len = original.length-1;
    if(len != (m *  n) -1){
        return [];
    }
    let res = [];
    // creating two dimensional array
    for (var i = 0; i < m; i++) {
      res[i] = new Array(n);
    }
    let rowIndex = 0;
    let colIndex = 0;
    let count = 0;
    for(let i=0;i<m*n;i++){
        res[rowIndex][colIndex++] =  original[i];
        count++;
        if(count == n){
            rowIndex++;
            colIndex = 0;
            count = 0;
        }    
    }
    return res;
};

/*
Runtime: 464 ms, faster than 15.54% of JavaScript online submissions for Convert 1D Array Into 2D Array.
Memory Usage: 67.6 MB, less than 50.68% of JavaScript online submissions for Convert 1D Array Into 2D Array.
*/


/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
     if (m * n !== original.length) {
        return [];
      }

      let a = [];

      for (let i = 0; i < m; i++) {
        a.push(original.splice(0, n));
      }

      return a;
};

/*
Runtime: 513 ms, faster than 11.49% of JavaScript online submissions for Convert 1D Array Into 2D Array.
Memory Usage: 65.2 MB, less than 80.74% of JavaScript online submissions for Convert 1D Array Into 2D Array.
*/