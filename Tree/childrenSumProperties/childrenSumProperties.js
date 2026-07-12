// tc:- o(n) sc:- o(h)

class Solution {
    isSumProperty(root) {
        //  code here
        if (!root) return true;
        if (!root.left && !root.right) return true; // leaf node return true
        let sum = 0;
        if (root.left) sum += root.left.data;
        if (root.right) sum += root.right.data;

        if (root.data !== sum) return false;

        return this.isSumProperty(root.left) && this.isSumProperty(root.right);

    }
}

// only 3 node in tree check children sum properties
var checkTree = function (root) {
    let sum = 0;
    if (root.left) sum += root.left.val;
    if (root.right) sum += root.right.val;

    if (root.val === sum) {
        return true;
    } else {
        return false;
    }
};
//to convert tree to children sum properties
function convertTree(root) {

    if (root === null || (root.left === null && root.right === null))
        return;

    let childSum = 0;

    if (root.left !== null)
        childSum += root.left.data;
    if (root.right !== null)
        childSum += root.right.data;

    // if the root's data is less than 
    // the sum of its children
    if (root.data <= childSum) {
        root.data = childSum;
    } else {
        if (root.left !== null)
            root.left.data = root.data;
        else if (root.right !== null)
            root.right.data = root.data;
    }

    // modify the left and right subtree
    convertTree(root.left);
    convertTree(root.right);

    // update the root's data to sum
    // of child node's data
    childSum = 0;
    if (root.left !== null)
        childSum += root.left.data;
    if (root.right !== null)
        childSum += root.right.data;

    // if root is not leaf node
    if (root.left !== null || root.right !== null)
        root.data = childSum;
}