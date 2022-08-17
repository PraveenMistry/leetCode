/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const subArray = [];
    let counter = 0; 
    for(let i=0;i<s.length;i++){
        if(!subArray.includes(s[i])){
            subArray.push(s[i]);
            if(subArray.length > counter){
                counter = subArray.length;
            }
        }else{
            // remove till s[i] if match 
            let index = subArray.indexOf(s[i]);
            subArray.splice(0, index+1);
            subArray.push(s[i]);
        }
    }
    return counter;
};
