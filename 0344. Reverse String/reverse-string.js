/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    while(start<end){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};

/*
Runtime: 138 ms
*/

/*

// 1. recursive version
function reverseStr( str ){
    if( str === "" ) return ""
    return reverseStr(str.substring(1)) + str.charAt(0)
}
console.log(reverseStr("abcdef")) // "fedcba"

// 2. built-in method
function reverse(str){
  if(!str || str.length <2) return str;
  return str.split('').reverse().join('');
}
console.log(reverseStr("abcdef")) // "fedcba"

// 3. string util method
String.prototype.reverse = function(){
    if(!this || this.length <2) return this;
  	return this.split('').reverse().join('');
}
let str = "abcdef"
console.log(str.reverse()) // "fedcba"

*/