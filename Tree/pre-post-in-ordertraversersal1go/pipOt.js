class Pair {
    constructor(node, state) {
        this.node = node;
        this.state = state;
    }
}

var allTraversals = function (root) {
    if (!root) return [[], [], []];

    let pre = [];
    let inOrder = [];
    let post = [];

    let stack = [new Pair(root, 1)];

    while (stack.length) {

        let top = stack.pop();

        if (top.state === 1) {

            pre.push(top.node.val);

            top.state = 2;
            stack.push(top);

            if (top.node.left)
                stack.push(new Pair(top.node.left, 1));

        } else if (top.state === 2) {

            inOrder.push(top.node.val);

            top.state = 3;
            stack.push(top);

            if (top.node.right)
                stack.push(new Pair(top.node.right, 1));

        } else {

            post.push(top.node.val);

        }
    }

    return [pre, inOrder, post];
};