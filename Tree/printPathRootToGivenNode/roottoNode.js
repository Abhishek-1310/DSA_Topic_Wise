//tc:- o(n) sc:- o(h)
function printPath(root, x) {
    if (!root) return [];

    let arr = [];
    getPath(root, arr, x);

    return arr;
}

function getPath(node, ans, x) {
    if (!node) return false;

    ans.push(node.data);

    if (node.data == x) return true;

    if (getPath(node.left, ans, x) || getPath(node.right, ans, x)) {
        return true;
    }

    ans.pop();

    return false;
}