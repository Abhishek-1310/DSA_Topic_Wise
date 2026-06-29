var postorderTraversal = function (root) {
    if (!root) return [];
    let result = [];
    let stack = [root];

    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result.reverse();
};

//Trick for Iterative Postorder
// Instead of:
// Root Left Right
// Generate:
// Root Right Left
// and reverse at the end.