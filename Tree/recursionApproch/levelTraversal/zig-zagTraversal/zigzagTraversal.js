var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true;
    while (queue.length) {
        let level = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            leftToRight ? level.push(node.val) : level.unshift(node.val)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
        leftToRight = !leftToRight;
    }
    return result;
};