/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let counter = 0;
    let isNeg = false;
    if(x < 0){
        isNeg = true;
        x = -(x);
    }
    while(x >= 1){
        let temp = Math.floor(x % 10);
        result =`${result}`+temp;
        x = Math.floor(x/10);
    }
    if (result >= Math.pow(2, 31) - 1 || result <= Math.pow(-2, 31)) {
        return 0;
    }
    return isNeg ? -result : result;
};

/*
Runtime: 151 ms
Memory Usage: 44 MB
*/