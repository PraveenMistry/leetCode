/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(!height || height.length <= 1){
        return 0;
    }
    
    let len = height.length;
    let start = 0;
    let end = len-1;
    let max_water = -1;
    while(start < end){
        if(height[start] < height[end]){
            let waterLevel = (height[start] * (end - start));
            if(waterLevel > max_water){
                max_water = waterLevel;
            }
            start++;
        }else{
            let waterLevel = (height[end] * (end - start));
            if(waterLevel > max_water){
                max_water = waterLevel;
            }
            end--;         
        }
    }
    
    return max_water;
    
};


/*
Runtime: 118 ms
Memory Usage: 49.6 MB
*/
