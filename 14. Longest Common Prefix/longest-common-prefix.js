/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let l=0;
    let r= len-1;

   return findPrefix(strs,l,r)
};


var findPrefix = function(strs, l, r){
    if(l===r){
		return strs[l]
	}
	if(l<r){
		let mid = Math.ceil(l+(r-l)/2);
		let str1 = findPrefix(strs,l,mid-1);
		let str2 = findPrefix(strs,mid,r);
		return	findPrefixUntill(str1,str2);
	}
	return null;
}


var findPrefixUntill  = function(str1, str2){
	let n1 = str1.length;
	let n2 = str2.length;
	let result = "";
	for (let i = 0, j = 0; i <= n1 - 1 &&
                j <= n2 - 1; i++, j++) {
		if(str1[i]==str2[j]){
			result += str1[i];
		}else{
            return result;
        }
	}
	return result;
}

/*
Runtime: 571 ms
Memory Usage: 49.9 MB
*/