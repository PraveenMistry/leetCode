/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let r=matrix.length;
    let c=matrix[0].length;
    
    for(let i=0;i<c;i++){
        let rowSet = new Set();
        let colSet = new Set();
        for(let j=0;j<r;j++){
            rowSet.add(matrix[i][j]);
            colSet.add(matrix[j][i]);
        }
        if(rowSet.size != r || colSet.size != c){
            return false;
        }
    }
    return true;
};