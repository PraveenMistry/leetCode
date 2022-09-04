

class Solution {
public:
    bool validMountainArray(vector<int>& arr) {
        int len = arr.size();
        int i = 0;

        // walk up
        while (i+1 < len && arr[i] < arr[i+1])
            i++;

        // peak can't be first or last
        if (i == 0 || i == len-1)
            return false;

        // walk down
        while (i+1 < len && arr[i] > arr[i+1])
            i++;

        return i == len-1;
    }
};
/*

*/