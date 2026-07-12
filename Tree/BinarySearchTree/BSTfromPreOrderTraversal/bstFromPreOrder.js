// tc:- o(n) sc:- o(h)
var bstFromPreorder = function (preorder) {
    let i = 0;  // to check all element in preorder array
    function bst(po, bound) {
        if (i == po.length || preorder[i] > bound) return null; // if index reach end of the arr return null or
        //if it greater than bound return null
        let root = new TreeNode(preorder[i++]); // if both condition is ok then create node and go tleft and right and attach node

        root.left = bst(preorder, root.val); // left value should be smaller than root node so bound is current node val
        root.right = bst(preorder, bound); // right value shoudl be greater than root node so bound is current node parent val

        return root;
    }
    return bst(preorder, Infinity) // max bound is max 

};