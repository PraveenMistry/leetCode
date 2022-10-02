/**
 * @param {string} s
 * @return {number}
 */

// DP solution
var numDecodings = function(s) {
    // Create dp array
    const dp = Array(s.length+1).fill(0);
    // If the first number is 0 then return we cannot decode this string
    if(s[0]==='0') return 0
    // Base cases
    dp[0] = 1;
    dp[1] = 1

    for(let i = 2; i <= s.length; i++) {
        // Get values for one and two digit numbers
        const oneDigit = +s.slice(i-1, i);
        const twoDigits = +s.slice(i-2, i);
        // Check if one digit and/or two digit numbers are valid
        if(oneDigit > 0) dp[i] = dp[i-1];
        if(twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i-2]
    }    
    return dp[s.length];
};