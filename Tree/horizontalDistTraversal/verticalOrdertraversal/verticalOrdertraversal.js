// tc:- o(nlogn) (dfs:-0(n) sorting:-o(nlogn) grouping:-0(n)) sc:- o(n) (nodes,ans,recursion took o(n))
var verticalTraversal = function (root) {
    let nodes = [];
    function dfs(node, row, col) {
        if (!node) return;

        nodes.push([col, row, node.val]);

        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }
    dfs(root, 0, 0);

    nodes.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    })

    let ans = [];
    let prevCol = null;

    for (let [col, row, val] of nodes) {
        if (col !== prevCol) {
            ans.push([]);
            prevCol = col;
        }
        ans[ans.length - 1].push(val);
    }
    return ans;
};