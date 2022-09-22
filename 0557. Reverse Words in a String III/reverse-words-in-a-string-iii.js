/**
 * @param {string} s
 * @return {string}
 */

const reverse = function(s){
    if(!s || s.length <2) return s;
    return s.split('').reverse().join('');
}

var reverseWords = function(s) {
    return s.split(" ").map((w) => {
        return reverse(w);
    }).join(" ");
};

/*
Runtime: 139 ms, faster than 23.52% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 48.3 MB, less than 73.45% of JavaScript online submissions for Reverse Words in a String III.
*/