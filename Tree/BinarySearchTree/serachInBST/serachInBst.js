//tc:- o(logn) sc:- o(1)
var searchBST = function (root, val) {
    while (root) {
        if (root.val === val) return root;
        root = val < root.val ? root.left : root.right;
    }
    return null;
};