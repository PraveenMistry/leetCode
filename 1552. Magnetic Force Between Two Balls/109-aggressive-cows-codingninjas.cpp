
// Aggressive Cows

bool canAssign(int minDist, vector<int> &stalls, int k){
    int n = stalls.size();
    int prevBallLoc = stalls[0];
    int ballCount = 1;
    for(int i=1; i<n; i++)
    {
        if(stalls[i] - prevBallLoc >= minDist)
        {
            ballCount++;
            prevBallLoc = stalls[i];
        }
        if(ballCount == k) return true;
    }
    return false;
}

int aggressiveCows(vector<int> &stalls, int k)
{
    int start = 0;
    sort(stalls.begin(), stalls.end());
    int end = *max_element(stalls.begin(), stalls.end());
    int mid = start + (end - start)/2;
    int ans = -1;
  
    while(start <= end){
        if(canAssign(mid, stalls, k)){
            ans = mid;
            start = mid + 1;
        }else{
            end = mid -1;
        }
        mid = start + (end - start)/2;
    }
    return ans;
}

/*
Runtime: 164ms
*/