/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */

var maxRepeating = function(sequence, word) {
    let res = 0;
    let kRepeating = '';
    while (kRepeating.length < sequence.length) {
        kRepeating += word;
        if (sequence.includes(kRepeating)) {
            res++
        } else {
            break;
        }
    }
    
    return res;
};

/*
Runtime: 120 ms, faster than 9.68% of JavaScript online submissions for Maximum Repeating Substring.
Memory Usage: 42.3 MB, less than 29.03% of JavaScript online submissions for Maximum Repeating Substring.
*/