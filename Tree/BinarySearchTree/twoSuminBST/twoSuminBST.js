//tc:- o(n) sc:- o(n)
// But in the Two Sum problem, we do not care about inorder traversal. We only care about visiting every node once and checking
// whether we've already seen its complement.
var findTarget = function (root, k) {
    let set = new Set();
    let result = false;
    function dfs(root) {
        if (!root) return false;
        if (set.has(k - root.val)) return true;
        set.add(root.val);
        return dfs(root.left) || dfs(root.right);
    }
    return dfs(root);
};

//tc:- o(n) sc:- o(h)
class BSTIterator {
    constructor(root, reverse) {
        this.stack = [];
        this.reverse = reverse;
        this.pushAll(root);
    }

    pushAll(node) {
        while (node) {
            this.stack.push(node);

            if (this.reverse) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
    }

    next() {
        let node = this.stack.pop();

        if (this.reverse) {
            this.pushAll(node.left);
        } else {
            this.pushAll(node.right);
        }

        return node.val;
    }
}

var findTarget = function (root, k) {

    if (!root) return false;

    let left = new BSTIterator(root, false); // smallest
    let right = new BSTIterator(root, true); // largest

    let i = left.next();
    let j = right.next();

    while (i < j) {

        let sum = i + j;
        if (sum === k) return true;

        if (sum < k) {
            i = left.next();
        } else {
            j = right.next();
        }
    }

    return false;
};