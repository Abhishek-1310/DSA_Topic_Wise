// tc:- o(n) sc:- o(n)
var buildTree = function (inorder, postorder) {
    let map = new Map()

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    let postIndex = postorder.length - 1;
    function build(left, right) {
        if (left > right) return null;
        let rootvalue = postorder[postIndex--]; // only two changes postIndex start from last beacuse root in postorder is atlast
        let root = new TreeNode(rootvalue);

        let mid = map.get(rootvalue);

        root.right = build(mid + 1, right);  // 2nd shoudl call right first coz postorder is left,right,root  
        root.left = build(left, mid - 1);

        return root;
    }
    return build(0, inorder.length - 1);
};