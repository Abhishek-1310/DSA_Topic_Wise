var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    let curr = root.val;
    if (p.val < curr && q.val < curr) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > curr && q.val > curr) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};