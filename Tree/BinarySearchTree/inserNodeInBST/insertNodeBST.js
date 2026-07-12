//tc:- o(logn) sc:- o(h)
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val);
    let curr = root;
    while (curr) {
        if (curr.val > val) {
            if (!curr.left) {
                curr.left = new TreeNode(val);
                break;
            }
            curr = curr.left;
        } else {
            if (!curr.right) {
                curr.right = new TreeNode(val);
                break;
            }
            curr = curr.right;
        }
    }
    return root;
};