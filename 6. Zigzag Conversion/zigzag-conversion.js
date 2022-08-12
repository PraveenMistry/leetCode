/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s == null || numRows <= 0){
        return;
    }
    if(numRows ==1){
        return s
    }
    
    let result = "";
    let steps = 2 * numRows - 2;
    for(let i=0; i<numRows; i++){
        for(let j=i; j < s.length; j += steps){
            result+=s[j];
            if(i != 0 && i != numRows - 1 && (j + steps - 2 * i) < s.length){
                result+=s[j + steps - 2 * i];
            }
        }
    }
    return result;
};


/*
Formula:

for first and last row : 2 * numRows - 2;
other = j + stpes - 2 * i;

[00]P                               [06]I                               [12]N
[01]A                   [05]L       [07]s                   [11]I       [13]G
[02]Y       [04]A                   [08]H       [10]R
[03]P                               [09]I

In our case - step = 2 * numRows - 2 = 2 * 4 - 2 = 6 and you can confirm that this condition holds true for first (0 —> 6 —> 12) and last rows (3 —> 9).

Iteration
For i = 0 => j = 0, 6, 12
For i = 1 => j = 1, 7, 13
For i = 2 => j = 2, 8
For i = 3 => j = 3, 9

*/

Runtime: 433 ms
Memory Usage: 51.6 MB