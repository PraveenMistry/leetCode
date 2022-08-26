/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Base cases
    if (x == 0 || x == 1)
        return x;
 
    // Starting from 1, try all
    // numbers until i*i is
    // greater than or equal to x.
    let i = 1;
    let result = 1;
     
    while (result <= x)
    {
        i++;
        result = i * i;
    }
    return i - 1;
};


/*
Runtime: 136 ms
Memory: 43.2 MB
*/

