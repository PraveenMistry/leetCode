/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var result = [];
    
    if (!root) {
        return result;
    }
    
    genPath(result, root, [], 0, sum);
    
    return result;
};

function genPath(result, root, curArr, curSum, target) {
    curArr.push(root.val);
    curSum += root.val;
    
    if ((curSum === target) && !root.left && !root.right) {
        result.push(curArr);
        return;
    }
    
    if (root.left) {
        genPath(result, root.left, curArr.concat(), curSum, target);
    }
    
    if (root.right) {
        genPath(result, root.right, curArr.concat(), curSum, target);
    }
}