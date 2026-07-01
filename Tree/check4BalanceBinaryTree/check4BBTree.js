// Tc:- o(n) sc:- o(n)


// A Balanced Binary Tree is a tree in which for every node, the difference between the heights of its left and right subtrees 
// is at most 1.
// Formula: |height(left) - height(right)| <= 1

var isBalanced = function (root) {
    function heightCheck(root) {
        if (!root) return 0;

        let lh = heightCheck(root.left);
        if (lh === -1) return -1;
        let rh = heightCheck(root.right);
        if (rh === -1) return -1;

        if (Math.abs(lh - rh) > 1) return -1;

        return 1 + Math.max(lh, rh);
    }
    return heightCheck(root) !== -1;
};