// tc: - o(n) sc: - o(n)
var maxPathSum = function (root) {
    let max = -Infinity;   // don't assign max to 0 coz max = Math.max(0, -3); will return 0 but we need -3 so assign max to -infinity
    function maxheight(root) {
        if (!root) return 0;

        let lh = Math.max(0, maxheight(root.left)); // done this to handle -ve case ignore -ve value 
        let rh = Math.max(0, maxheight(root.right)); // done this to handle -ve case ignore -ve value 

        max = Math.max(max, root.val + lh + rh);

        return root.val + Math.max(lh, rh);
    }
    maxheight(root);
    return max;
};