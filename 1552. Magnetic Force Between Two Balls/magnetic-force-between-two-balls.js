/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
const canPlaceMBalls = function(minDist, position, m){
    let ballCount = 1;
    let prevBallLoc = position[0];
    for(let i=1;i<position.length;i++){
        if(position[i] - prevBallLoc  >= minDist){
            ballCount++;
            prevBallLoc = position[i];
        }
        if(ballCount == m){
            return true;
        }
    }
    return false;
}

var maxDistance = function(position, m) {
    let start = 0;
    position.sort(function(a,b) { return a-b });
    let end = position[position.length-1];
    let ans = -1;
    let mid = start + parseInt((end-start)/2);
    while(start <= end){
        if(canPlaceMBalls(mid, position, m)){
            ans = mid;
            start = mid + 1;
        }else{
            end = mid - 1;
        }
        mid = start + parseInt((end-start)/2);
    }
    return ans;
};

/*
Runtime: 305 ms, faster than 77.94% of JavaScript online submissions for Magnetic Force Between Two Balls.
Memory Usage: 54.1 MB, less than 36.76% of JavaScript online submissions for Magnetic Force Between Two Balls.
*/