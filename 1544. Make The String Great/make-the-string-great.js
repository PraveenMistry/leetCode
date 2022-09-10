/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function (s) {
    if (s.length == 1) return s;
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (stack.length == 0){
            stack.push(s[i]);
        }  else {
            let end = stack[stack.length - 1];
            if ((isUpperCase(end) && isLowerCase(s[i]) && isEqual(end, s[i])) || (isLowerCase(end) && isUpperCase(s[i]) && isEqual(end, s[i]))) {
                stack.pop();
                continue;
            }
            stack.push(s[i]);
        }
    }
    return stack.join("");
};


const isEqual = (s1, s2) => {
    if (s1.toLowerCase() == s2.toLowerCase()) {
        return true;
    }
    return false;
};

const isUpperCase = (character) => {
    if (character == character.toUpperCase()) {
        return true;
    }
    return false;
};

const isLowerCase = (character) => {
    if (character == character.toLowerCase()) {
        return true;
    }
    return false;
};


/**
Runtime: 129 ms, faster than 23.65% of JavaScript online submissions for Make The String Great.
Memory Usage: 45.8 MB, less than 17.73% of JavaScript online submissions for Make The String Great.
**/