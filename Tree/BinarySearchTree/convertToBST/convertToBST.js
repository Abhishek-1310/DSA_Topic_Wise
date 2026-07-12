// Time: O(n) (every node is visited once)
// Space: O(h) due to the recursion stack, where h is the height of the tree.
var recoverTree = function (root) {
    let first = null, last = null, middle = null;
    let prev = new TreeNode(-Infinity);
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        if (prev && node.val < prev.val) {
            if (!first) {
                first = prev;
                middle = node;
            }
            last = node;
        }
        prev = node;
        inorder(node.right);
    }
    inorder(root);
    if (first && last) {
        [first.val, last.val] = [last.val, first.val];
    } else if (first && middle) {
        [first.val, middle.val] = [middle.val, first.val];
    }
    return root;
};