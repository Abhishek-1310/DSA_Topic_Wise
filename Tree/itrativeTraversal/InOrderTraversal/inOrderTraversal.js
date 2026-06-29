var inorderTraversal = function (root) {
    if (!root) return [];
    let result = [];
    let stack = [];
    let curr = root

    while (curr || stack.length) {

        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
};