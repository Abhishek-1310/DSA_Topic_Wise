//tc:- o(n) sc:- o(1)
class Solution {
    inOrder(root) {
        let inOrder = [];
        let curr = root;
        while (curr) {
            if (curr.left === null) {
                inOrder.push(curr.data);
                curr = curr.right;
            } else {
                let prev = curr.left;
                while (prev.right && prev.right != curr) {
                    prev = prev.right;
                }
                if (prev.right == null) {
                    prev.right = curr;
                    curr = curr.left
                } else {
                    prev.right = null;
                    inOrder.push(curr.data);
                    curr = curr.right;
                }
            }
        }
        return inOrder;

    }
}