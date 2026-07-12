// Serialize: O(n) time, O(n) space.
// Deserialize: O(n) time, O(n) space.

var serialize = function (root) {
    if (!root) return "";

    let s = "";
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();

        if (node === null) {
            s += "#,"
        } else {
            s += node.val + ",";
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return s;
};

var deserialize = function (data) {
    if (data == "") return null;
    let res = data.split(",");
    res.pop();
    let root = new TreeNode(Number(res[0]));
    let queue = [root];

    for (let i = 1; i < res.length; i++) {
        let parent = queue.shift();
        if (res[i] !== '#') {
            let left = new TreeNode(Number(res[i]));
            parent.left = left;
            queue.push(left);
        }
        if (res[++i] !== '#') {
            let right = new TreeNode(Number(res[i]));
            parent.right = right;
            queue.push(right);
        }
    }
    return root;
};