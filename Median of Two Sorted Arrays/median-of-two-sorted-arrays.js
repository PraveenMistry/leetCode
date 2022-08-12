/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [];
    let left = 0, right = 0, counter = 0;
    
    while(nums1.length > left && nums2.length > right){
        if(nums1[left] > nums2[right]){
            mergedArray.push(nums2[right]);
            right++;
        }else if(nums1[left] <= nums2[right]){
            mergedArray.push(nums1[left]);
            left++;
        }
    }
    
    
    for(let i=left;i<nums1.length;i++){
        mergedArray.push(nums1[i]);
    }
    
    for(let j=right;j<nums2.length;j++){
        mergedArray.push(nums2[j]);
    }
    
    if(mergedArray.length % 2 !== 0){
        let index = Math.floor(mergedArray.length / 2);
        return mergedArray[index];
    }else{
        let index = Math.floor((mergedArray.length - 1) / 2);
        return (mergedArray[index] + mergedArray[index+1]) / 2;    
    }
};

/*
Runtime: 193 ms
Memory Usage: 47.4 MB
*/