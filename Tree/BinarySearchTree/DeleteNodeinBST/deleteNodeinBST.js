//tc:- o(logn) sc:- o(1)
var deleteNode = function (root, key) {
    if (!root) return null;

    if (root.val === key) return helper(root);

    let curr = root;
    while (curr) {
        if (curr.val > key) {
            if (curr.left && curr.left.val === key) {
                curr.left = helper(curr.left);
                break;
            } else {
                curr = curr.left;
            }
        } else {
            if (curr.right && curr.right.val === key) {
                curr.right = helper(curr.right);
                break;
            } else {
                curr = curr.right;
            }
        }

    }
    return root;
};
function helper(root) {
    if (!root.left) {
        return root.right;
    }
    if (!root.right) {
        return root.left;
    }
    let rightTree = root.right;
    let leftLastRight = llRight(root.left);
    leftLastRight.right = rightTree;
    return root.left;
}
function llRight(root) {
    if (!root.right) return root;
    return llRight(root.right);
}