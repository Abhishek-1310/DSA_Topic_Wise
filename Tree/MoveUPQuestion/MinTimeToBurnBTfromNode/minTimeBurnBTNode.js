// tc:- o(n) sc:- o(n)

var amountOfTime = function (root, start) {
    let parent = new Map();
    let queue = [root];
    let target = null;
    while (queue.length) {
        let node = queue.shift();
        if (node.val === start) target = node;
        if (node.left) {
            parent.set(node.left, node);
            queue.push(node.left);
        }
        if (node.right) {
            parent.set(node.right, node);
            queue.push(node.right);
        }
    }

    queue = [target];
    let visited = new Set();
    visited.add(target);
    let result = -1;

    while (queue.length) {

        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left && !visited.has(node.left)) {
                queue.push(node.left);
                visited.add(node.left);
            }
            if (node.right && !visited.has(node.right)) {
                queue.push(node.right);
                visited.add(node.right);
            }
            if (parent.has(node) && !visited.has(parent.get(node))) {
                queue.push(parent.get(node));
                visited.add(parent.get(node));
            }
        }

        result++;
    }
    return result;
};