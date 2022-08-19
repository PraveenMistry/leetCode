/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s || s.length <= 1){
        return false;
    }
    
    let stack = [];
    let map = {
        '(':')',
        '[':']',
        '{':'}',
    }
    
    for(let i=0;i< s.length;i++){
        if(map[s[i]]){
            stack.push(map[s[i]])
        }else{
            if(stack.pop() != s[i]){
               return false
            }
        }
    }
    
    return stack.length > 0 ? false : true;
};

/*
Runtime: 74 ms
Memory Usage: 42 MB
*/