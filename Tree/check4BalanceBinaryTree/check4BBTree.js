// Tc:- o(n) sc:- o(n)

var isBalanced = function (root) {
    let ans = true;
    function height(root) {
        if (!root) return 0;

        let left = height(root.left);
        if (left == -1 && right == -1) return -1;
        let right = height(root.right);
        if (Math.abs(left - right) > 1) ans = false;;
        return 1 + Math.max(left, right);
    }
    height(root);
    return ans;
};