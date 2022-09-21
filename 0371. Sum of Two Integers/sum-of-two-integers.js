/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let x, y;
    do {
        x = a & b;
        y = a ^ b;
        a = x << 1;
        b = y;
    } while (x);
    
    return y;
};

/*
XOR (x ^ y) is addition without carry. 
(x & y) is the carry-out from each bit. 
(x & y) << 1 is the carry-in to each bit.
*/

/*
Runtime: 116 ms, faster than 5.91% of JavaScript online submissions for Sum of Two Integers.
Memory Usage: 40.6 MB, less than 100.00% of JavaScript online submissions for Sum of Two Integers.
*/