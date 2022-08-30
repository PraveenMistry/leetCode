/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let index = s.indexOf(part)
    if(index < 0){
        return s;
    }
    s = s.substring(0, index) + s.substring(index+part.length, s.length);
    return removeOccurrences(s, part);
};

/*
Runtime: 93 ms, faster than 62.69% of JavaScript online submissions for Remove All Occurrences of a Substring.
Memory Usage: 42.4 MB, less than 73.88% of JavaScript online submissions for Remove All Occurrences of a Substring.
*/
