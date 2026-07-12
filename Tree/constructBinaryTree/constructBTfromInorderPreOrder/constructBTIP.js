//tc:- o(n)  sc:- o(n)
var buildTree = function (preorder, inorder) {
    let map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    let preIndex = 0;
    function build(left, right) {
        if (left > right) return null;
        let rootValue = preorder[preIndex++];
        let root = new TreeNode(rootValue);

        let mid = map.get(rootValue);

        root.left = build(left, mid - 1);

        root.right = build(mid + 1, right);

        return root;
    }
    return build(0, inorder.length - 1);

};