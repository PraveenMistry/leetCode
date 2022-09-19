/*
A) Brute force
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num > 9){
        let str = num+"";
        let sum = 0;
        for(let i=0;i<str.length;i++){
            sum+=parseInt(str[i]);
        }
        num = sum;
    }
    return num;
};

/*
Runtime: 121 ms, faster than 36.89% of JavaScript online submissions for Add Digits.
Memory Usage: 43.7 MB, less than 71.60% of JavaScript online submissions for Add Digits.
*/

/*
B) Brute force with Mod
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num == 0) return 0;
    if(num % 9 == 0) return 9;
    return (num % 9);
};

/*
Runtime: 90 ms, faster than 78.40% of JavaScript online submissions for Add Digits.
Memory Usage: 42.1 MB, less than 99.81% of JavaScript online submissions for Add Digits.
*/