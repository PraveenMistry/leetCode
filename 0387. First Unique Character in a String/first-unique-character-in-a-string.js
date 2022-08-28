/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for( let i = 0; i < s.length; i++ ){
        let char = s[i];
        if(map.has(char) ){
            map.set( char, map.get(char)+1 )
        }else{
            map.set( char, 1 )
        }
    }
    let arr = Array.from(map);
    for( let i = 0; i < arr.length; i++ ){
        if( arr[i][1] == 1 ) return s.indexOf(arr[i][0]);
    }
    return -1;
};