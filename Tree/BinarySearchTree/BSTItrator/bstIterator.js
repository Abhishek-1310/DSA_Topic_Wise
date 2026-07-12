var BSTIterator = function (root) {
    this.stack = [];
    this.pushLeft(root);
};

BSTIterator.prototype.next = function () {
    let node = this.stack.pop();
    if (node.right) {
        this.pushLeft(node.right);
    }
    return node.val
};
BSTIterator.prototype.pushLeft = function (node) {
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};

BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0;
};

// Operation	Time Complexity	Space Complexity
// Constructor	O(h)	O(h)
// next()	    O(1) amortized (O(h) worst case)	O(h)
// hasNext()	O(1)	O(1)

// Complete traversal (all n nodes)	O(n)	O(h)