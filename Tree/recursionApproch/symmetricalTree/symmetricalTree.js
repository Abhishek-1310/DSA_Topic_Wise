// tc:- o(n) sc:- o(h)
var isSymmetric = function (root) {
    return root == null || symmetric(root.left, root.right)
};

function symmetric(left, right) {
    if (left == null || right == null) {
        return left == right;
    }
    if (left.val !== right.val) return false;

    return symmetric(left.left, right.right) && symmetric(left.right, right.left)
}