/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    for(let i=1;i<nums.length;i++) {
        let times = 0
        while(nums[i]-nums[i-1] ==1) {
            times++
            nums.splice(i-1,1)
        }
        if (times>0) {
            nums[i-1] = `${nums[i-1] - times}->${nums[i-1]}`
        }
    }
    return nums.map(e=>String(e))
};

/*

*/