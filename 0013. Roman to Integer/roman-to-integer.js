/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(!s && !s.length){
        return;
    }
    const hash= {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let result = hash[s[s.length-1]];
    for(let i=s.length-2; i>=0; i--){
        if(!s[i] || !s[i+1] || !hash[s[i]] || !hash[s[i+1]]){
           return result;
        }
        
        if(hash[s[i]] >= hash[s[i+1]]){
            result += hash[s[i]];
        }else{
            result -= hash[s[i]];
        }
    }
    return result;
};

/*
Runtime: 199 ms
*/

