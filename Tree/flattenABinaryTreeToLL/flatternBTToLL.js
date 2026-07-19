// tc:- o(n) sc:- o(n)
// go to right unitl last go to left until last make node.right to prev then left null then point prev to curr node
var flatten = function (root) {
    let prev = null;
    function flattern(node) {
        if (!node) return null;

        flattern(node.right);
        flattern(node.left);

        node.right = prev;
        node.left = null;
        prev = node;

    }
    flattern(root);
    return root;
};

//tc:- o(n) sc:- o(1)
// with morris traversal
// try with one example
curr = root
while (curr) {
    if (curr.left) {
        prev = curr.left;
        while (prev.right) {
            prev = prev.right;
        }
        prev.right = curr.right;
        curr.right = curr.left;
        curr.left = null;
    }
    curr = curr.right;
}
