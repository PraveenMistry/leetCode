/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;//row
    const n = matrix[0].length;//col
    let rowZeroIndx = [];
    let colZeroIndx = [];
    
    const map = {};
    
    const getAllIndicesOfZero = (row) => { // get all index with value 0 - column
      return  row.map((e, i) => e === 0 ? i : '').filter(String)
    }
    for(let i=0;i<m;i++){
           map[i] = matrix[i]; // array 
    }
   
    for(let key in map){ // check in every array - 1Darray from matrix or Row wise
        if(map[key].includes(0)){
            rowZeroIndx.push(+key);
            colZeroIndx.push(...getAllIndicesOfZero(map[key]));
        }
    }
    for(let i of rowZeroIndx){
        for(let k=0;k<n;k++){
            matrix[i][k] = 0;
        }
    }
    for(let i of colZeroIndx){
        for(let k=0;k<m;k++){
            matrix[k][i] = 0;
        }
    }
    return matrix;
};

/*
*/