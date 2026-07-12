var kthSmallest = function (root, k) {
    let count = 0;
    let ans;
    function inorder(node) {
        if (!node || ans !== undefined) return; // when we find ans  then we returned to reduce time  complexity
        // like ans is assigned so it is not undefined tehn return it 
        inorder(node.left)
        count++;
        if (count === k) {
            ans = node.val;
            return;
        }
        inorder(node.right);
    }
    inorder(root);
    return ans;
};