/**
 * @param {string} s
 * @return {number}
 */

/*
Ex)
IN: "4193 with 4 words"
OUT: 4193

Ex)
IN: "words and 987"
OUT: 987


*/
var myAtoi = function(s) {
    let result = '';
    let len = s.length;
    let isNeg = false;
    let singbit = false;;
    let numberBit = false;
    for(let i=0;i<=len;i++){
        console.log("s[i]",i,s[i], Number(s[i]) >= 0);
        if(numberBit && s[i] === ' '){
            if(isNeg){
                if(-result <= Math.pow(-2, 31)){
                    return Math.pow(-2, 31);
                }
                return -result
            }else{
                if(result >= Math.pow(2, 31) - 1){
                    return Math.pow(2, 31) - 1;
                }
                return result;
            }
        }if(singbit && s[i] === ' '){
            return 0;
        }else if(s[i] == " "){
            continue;
        }else if(numberBit && (s[i] === '+' || s[i] === '-')){
            if(isNeg){
                if(-result <= Math.pow(-2, 31)){
                    return Math.pow(-2, 31);
                }
                return -result
            }else{
                if(result >= Math.pow(2, 31) - 1){
                    return Math.pow(2, 31) - 1;
                }
                return result;
            }
        }else if(singbit && (s[i] === '+' || s[i] === '-')){
            return 0;
        }else if(s[i] === '-'){
            isNeg = true;
            singbit = true;
        }else if(s[i] === '+'){
            singbit = true;
        }else if(Number(s[i]) >= 0){
            numberBit = true;
            result = result+s[i];
        }else{
            if(isNeg){
                if(-result <= Math.pow(-2, 31)){
                    return Math.pow(-2, 31);
                }
                return -result
            }else{
                if(result >= Math.pow(2, 31) - 1){
                    return Math.pow(2, 31) - 1;
                }
                return result;
            }
        }    
    }
};

/*
Runtime: 405 ms
Memory Usage: 52.2 MB
*/



/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    if(!s.length){
        return 0;
    }
    let num = 0;
    let sign = s[0] == '-' ? -1 : 1;
    if(s[0] == '+' || s[0] == '-'){
        s = s.substring(1,s.length);
    }
    for(let i=0;i<s.length;i++){
        if(s.charCodeAt(i) > 57 || 48 > s.charCodeAt(i)){
            break;
        }
        num = parseInt(num * 10) + parseInt(s[i]);
        if ( sign * num <= Math.pow(-2, 31)) { // condition for max - min values
            return Math.pow(-2, 31);
        }
        if(sign * num >= Math.pow(2, 31) - 1){
           return Math.pow(2, 31) - 1;
        }
    }
    return sign * num;
};


/*
Runtime: 96 ms, faster than 75.92% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 46.2 MB, less than 10.62% of JavaScript online submissions for String to Integer (atoi).
*/

