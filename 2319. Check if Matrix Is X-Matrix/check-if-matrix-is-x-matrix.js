/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    let n= grid.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
           if(i == j && (grid[i][j] == 0 || grid[i][n-j-1] == 0)){ // check if diagram is 0
               return false
           }else if(i != j && i != n-j-1 && grid[i][j] != 0){ // check if non diagram is not 0
               return false;
           }
        }
    }
    
    return true;
};

/*
Runtime: 116 ms, faster than 30.39% of JavaScript online submissions for Check if Matrix Is X-Matrix.
Memory Usage: 45.5 MB, less than 8.29% of JavaScript online submissions for Check if Matrix Is X-Matrix.
*/


// Optimize 

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
   let x = grid.length;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (i + j == x - 1 || i == j) { //coordinates of diagonal cells
                if (grid[i][j] == 0) {
                    return false;
                }
                continue;
            } else if (grid[i][j] > 0) {
                return false;
            }
        }
    }
    return true;
};

