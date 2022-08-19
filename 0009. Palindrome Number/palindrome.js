/**
 * @param {number} x
 * @return {boolean}
*/

var flip = function(num){
    let rev = '';
    let isNeg = false;
    if(num < 0){
        isNeg = true;
        num = -num;
    }
    while(num){
        let temp = Math.floor(num % 10);
        rev = `${rev}${temp}`;
        num = Math.floor(num / 10); 
    }
    return isNeg ? `${rev}${'-'}` : rev;
}

var isPalindrome = function(x) {
    let rev = flip(x);
    if(rev == x){
        return true
    }
    return false
};
