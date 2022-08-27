/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start =1;
        let end = n;
        let mid = start + parseInt((end - start)/2);
        let ans = -1;
        while(start <= end){
            if(isBadVersion(mid)){
                ans = mid;
                end = mid - 1;
            }else{
                start = mid + 1;
            }
           mid = start + parseInt((end - start)/2); 
        }
        return ans;
    };
};

/*
Runtime: 82 ms, faster than 60.48% of JavaScript online submissions for First Bad Version.
Memory Usage: 42.4 MB, less than 5.11% of JavaScript online submissions for First Bad Version.
*/