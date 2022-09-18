/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
   const originalString = s;
    const originalReversed = s.split('').reverse().join('')
    let reversed = originalReversed;
    while(reversed !== s) {
        s = s.slice(0,-1);
        reversed = reversed.slice(1);
    }
    return originalReversed.slice(0,-s.length) + originalString;
};

/*
Runtime: 124 ms, faster than 32.20% of JavaScript online submissions for Shortest Palindrome.
Memory Usage: 45 MB, less than 63.56% of JavaScript online submissions for Shortest Palindrome.
*/

/*
The idea is when we put a reversed string next to the string it was reversed from, then we'd get a palindrome

word = 'abcd'
reversed = 'dcba'
reversed + word = 'dcbaabcd'
It's now a palindrome but it's not the shortest palindrome.
The shortest palindrome for abcd is dcbabcd
If you notice we just need to add dcb in front of the stringabcd to accomplish it.

Also notice that dcb is a prefix of the reversed string dcba.
The solution is really just a matter of prepending the prefix of the reversed string so now we just have to find out which prefix we'll be grabbing from the reversed string.

Luckily, it's very easy to find the prefix

	word = 'abcd'
	reversed = 'dcba'
	// now all we have to do is keep removing one character from the end of word
	// and remove one character from the beginning of the reversed word
	// We keep doing this until both words become equal
	'abcd' 'dcba'
	'abc' 'cba'
	'ab' 'ba'
	'a' 'a'
	// Now they're equal 
	// The length remaining is 1
	// Which means removing 1 character from the end of dcba will give us our prefix
	// 'dcba' -> 'dcb'
	// dcb + abcd = dcbabcd //shortest palindrome
*/