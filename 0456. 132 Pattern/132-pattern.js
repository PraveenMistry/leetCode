/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let len = nums.length;
    if (len < 3) {
        return false;
    }

    let stk = new Stack();
    let k = -1;
    for (let i = len - 1; i >= 0; i--) {
        if (k > -1 && nums[k] > nums[i]) {
            return true;
        }

        while (!stk.isEmpty() && nums[i] > nums[stk.peek()]) {
            k = stk.pop();
        }

        stk.push(i);
    }

    return false;
    
};

class Stack {
    constructor() {
        this.stack = []
    }
    push(a) {
        this.stack.push(a)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    size() {
        return this.stack.length
    }
    isEmpty() {
        return this.stack.length == 0
    }
}

/*
Runtime: 112 ms, faster than 61.47% of JavaScript online submissions for 132 Pattern.
Memory Usage: 53.4 MB, less than 58.72% of JavaScript online submissions for 132 Pattern.
*/