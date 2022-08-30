/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    s = s.replace(/\s+/g, ' ').trim();
    let words = s.split(" ");
    let start = 0;
    let end = words.length-1;
    while(start < end){
        if(words[start] == ""){
            start++;
        }else if(words[end] == ""){
            end--;
        }else {
            console.log("start",start,end)
            let temp = words[start];
            words[start] = words[end];
            words[end] = temp;
            start++;
            end--;
        }
    }
    return words.join(" ");
};

/*
Runtime: 171 ms, faster than 5.46% of JavaScript online submissions for Reverse Words in a String.
Memory Usage: 48.2 MB, less than 5.05% of JavaScript online submissions for Reverse Words in a String.
*/

// B) JS  

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    let splitted =s.trim().split(" ").filter((val)=>val!='');
    return splitted.reverse().join(" ");
};

/*
Runtime: 95 ms, faster than 52.70% of JavaScript online submissions for Reverse Words in a String.
Memory Usage: 43.9 MB, less than 76.52% of JavaScript online submissions for Reverse Words in a String.
*/