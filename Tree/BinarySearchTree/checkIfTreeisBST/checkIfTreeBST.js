//tc:- o(n) sc:- o(h)-o(logn)
var isValidBST = function (root) {
    function isValid(root, min, max) {
        if (!root) return true;

        if (root.val <= min || root.val >= max) return false;

        return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
    }
    return isValid(root, -Infinity, Infinity);
};