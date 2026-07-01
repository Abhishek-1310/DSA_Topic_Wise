//tc:- o(n) sc:- o(h)
var rightSideView = function (root) {
    let level = 0;
    let ans = [];
    function Rv(node, level) {
        if (!node) return;

        if (level == ans.length) ans.push(node.val);

        Rv(node.right, level + 1);
        Rv(node.left, level + 1);
    }
    Rv(root, level);
    return ans;
};