/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
    ];
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let aTom = [];
    words.forEach((v,i) => {
        let temp = '';
        for(let j = 0; j < words[i].length; j++){
            let turned = words[i].charCodeAt(j) - 97;
            temp += morse[turned]
        }

        if (aTom.indexOf(temp) === -1) aTom.push(temp)
    })

    return aTom.length
};

/*
Runtime: 127 ms, faster than 11.86% of JavaScript online submissions for Unique Morse Code Words.
Memory Usage: 42.7 MB, less than 82.30% of JavaScript online submissions for Unique Morse Code Words.
*/