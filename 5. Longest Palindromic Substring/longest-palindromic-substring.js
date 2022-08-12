/**
 * @param {string} s
 * @return {string}
 */

let expand = function(s, start, end){
    while(start >=0 && end<=s.length && s[start] == s[end]){
        start--;
        end++;
    }
   return s.substring(start+1, end)
}

let longestPalindrome = function(s) {
    if(!s || s.length<=1){
        return s
    }
    let longestSubstring = s.substring(0,1);
    for(let i=0;i<s.length-1;i++){
        let temp = expand(s,i,i);
        console.log("temp",i,i,temp);
        if(longestSubstring.length <= temp.length){
            longestSubstring = temp;
        }
        temp = expand(s,i,i+1);
        console.log("temp 2 > ",i, i+1, temp);
        if(longestSubstring.length <= temp.length){
            longestSubstring = temp;
        }
    }
    return longestSubstring;
};

/*
Runtime: 251 ms
*/