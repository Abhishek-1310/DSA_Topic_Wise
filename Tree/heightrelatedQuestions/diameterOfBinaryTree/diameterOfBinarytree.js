// tc:- o(n) sc:- o(n)

var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    function height(node) {
        if (!node) return 0;
        let lh = height(node.left);
        let rh = height(node.right);
        diameter = Math.max(diameter, lh + rh);
        return 1 + Math.max(lh, rh);
    }
    height(root);
    return diameter;
};