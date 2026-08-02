// Time: O(n) (every node is visited once)
// Space: O(h) due to the recursion stack, where h is the height of the tree.
var recoverTree = function (root) {
    let first = null, last = null;
    let prev = new TreeNode(-Infinity);

    function inorder(node) {
        if (!node) return;
        inorder(node.left);

        // Detect the fault
        if (prev && node.val < prev.val) {
            // First fault: set first variable
            if (!first) {
                first = prev;
            }
            // Both faults: last always points to the current violating node
            last = node;
        }
        prev = node;

        inorder(node.right);
    }
l
    inorder(root);
    // If faults were found, first and last will always be populated
    if (first && last) {
        [first.val, last.val] = [last.val, first.val];
    }

    return root;
};
