// tc:- o(n) sc:- o(h)
var countNodes = function (root) {
    if (!root) return 0;

    return 1 + countNodes(root.left) + countNodes(root.right);
};

// tc:- 0(logn^2) sc:- o(logn)

var countNodes = function (root) {
    if (!root) return 0;
    let left = leftH(root);
    let right = rightH(root);
    if (left === right) return Math.pow(2, left) - 1 // if both side hieght are equal then use use formula full binray tree

    return 1 + countNodes(root.left) + countNodes(root.right);
};
function leftH(node) {
    let h = 0;
    while (node) {
        h++;
        node = node.left;
    }
    return h;
}
function rightH(node) {
    let h = 0;
    while (node) {
        h++;
        node = node.right;
    }
    return h;
}