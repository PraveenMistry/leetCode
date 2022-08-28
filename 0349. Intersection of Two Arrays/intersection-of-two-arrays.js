/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let has = {};
    let result = [];
    if(nums1.length < nums2.length){
        for(let i=0;i<nums2.length;i++){
            has[nums2[i]] = nums2[i];
        }
        for(let i=0;i<nums1.length;i++){
            if(has[nums1[i]] == nums1[i]){
                result.push(nums1[i]);
                has[nums1[i]] = undefined;  // to avoid duplicate value
            }
        }
        
    }else{
        for(let i=0;i<nums1.length;i++){
            has[nums1[i]] = nums1[i];
        }
        for(let i=0;i<nums2.length;i++){
            if(has[nums2[i]] == nums2[i]){
                result.push(nums2[i]);
                has[nums2[i]] = undefined; // to avoid duplicate value
            }
        }
    }
    
    return result;
    
};

/*
Runtime : 91 ms 
Memory  : 42.8 MB  
*/

// OR

let numsHash = {}
    let return_arr = []
    for(let i=0; i<nums1.length; i++){
        numsHash[nums1[i]] = 1
    }
    for(let k=0; k<nums2.length; k++){
        if(numsHash[nums2[k]] && !return_arr.includes(nums2[k])){
            return_arr.push(nums2[k])
        }
    }
    return return_arr

/*
Runtime: 67 ms, 
faster than 93.31%
Memory Usage: 42.1 MB
*/