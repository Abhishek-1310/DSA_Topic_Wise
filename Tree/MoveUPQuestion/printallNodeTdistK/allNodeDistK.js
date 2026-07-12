var distanceK = function (root, target, k) {
    let parent = new Map();
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();

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

    let distance = 0;

    while (queue.length) {
        if (distance === k) {
            return queue.map(node => node.val); // if queue=[node(7),node(4),node(1)] then output of map is arr with value [7,4,1]
        }
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left && !visited.has(node.left)) {
                visited.add(node.left);
                queue.push(node.left);
            }
            if (node.right && !visited.has(node.right)) {
                visited.add(node.right);
                queue.push(node.right);
            }

            if (parent.has(node) && !visited.has(parent.get(node))) {
                visited.add(parent.get(node));
                queue.push(parent.get(node));
            }
        }
        distance++
    }
    return [];
};