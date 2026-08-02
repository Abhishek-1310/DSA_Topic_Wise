//tc:- o(n) sc:- o(1)
class Solution {
    inOrder(root) {
        let inOrder = [];
        // We use the parameter 'root' directly as our moving pointer
        while (root) {
            if (root.left === null) {
                inOrder.push(root.data);
                root = root.right;
            } else {
                let prev = root.left;
                while (prev.right && prev.right !== root) {
                    prev = prev.right;
                }
                if (prev.right === null) {
                    prev.right = root;
                    root = root.left;
                } else {
                    prev.right = null;
                    inOrder.push(root.data);
                    root = root.right;
                }
            }
        }
        return inOrder;
    }
}
