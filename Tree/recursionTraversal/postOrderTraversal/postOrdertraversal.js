var postorderTraversal = function (root) {
    let result = [];

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }
    dfs(root);
    return result;
};