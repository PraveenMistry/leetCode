#include <iostream>
#include <vector>

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int counter = 0;
        vector <int> temp (nums.size(), 0);
        for(int i=0;i<nums.size();i++){
            if(nums[i]!=0){
                temp[counter++] = nums[i];
            }
        }
        nums = temp;
    }
};

/*
Runtime: 33 ms, faster than 66.29% of C++ online submissions for Move Zeroes.
Memory Usage: 19.7 MB, less than 6.32% of C++ online submissions for Move Zeroes.
*/