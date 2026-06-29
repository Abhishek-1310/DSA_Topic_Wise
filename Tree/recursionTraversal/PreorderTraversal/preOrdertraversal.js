class Solution {
    preOrder(root) {
        let result = [];
        function dfs(node) {
            if (node == null) return;

            result.push(node.data);
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return result;

    }
}