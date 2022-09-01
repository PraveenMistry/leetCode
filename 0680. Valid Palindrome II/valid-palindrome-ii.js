/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s,i,j){
    while(i<j){
        if(s[i] == s[j]){
            i++;
            j--;
        }
        else
            return false;
    }
    return true;
}

var validPalindrome = function(s) {
    let deleteCount = 0;
    let start = 0;
    let end = s.length-1;
    while(start <= end){
        if(s[start] != s[end]){
            return isPalindrome(s, start+1, end) || isPalindrome(s, start, end-1); // to check is palindrome even after removing one char
        }else{
            start++;
            end--;
        }
    }
    return true;
};

/*
Runtime: 172 ms, faster than 17.81% of JavaScript online submissions for Valid Palindrome II.
Memory Usage: 48.3 MB, less than 45.39% of JavaScript online submissions for Valid Palindrome II.
*/