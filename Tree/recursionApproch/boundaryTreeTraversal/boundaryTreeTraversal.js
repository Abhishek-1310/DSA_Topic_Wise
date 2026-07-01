// tc: o(n) sc:- O(h)
class Solution {
    boundaryTraversal(root) {
        // code here
        let result = [];
        if (!this.isLeafNode(root)) result.push(root.data);
        this.addLeftBoundray(root, result);
        this.addLeafNode(root, result);
        this.addRightBoundray(root, result);
        return result;


    }
    addLeftBoundray(root, result) {
        let curr = root.left;
        while (curr) {
            if (!this.isLeafNode(curr)) result.push(curr.data);
            curr = curr.left ? curr.left : curr.right;
        }
    }
    addRightBoundray(root, result) {
        let curr = root.right;
        let rev = []
        while (curr) {
            if (!this.isLeafNode(curr)) rev.push(curr.data);
            curr = curr.right ? curr.right : curr.left;
        }
        for (let i = rev.length - 1; i >= 0; i--) {
            result.push(rev[i]);
        }
    }
    addLeafNode(root, result) {
        if (!root) return;
        if (this.isLeafNode(root)) {
            result.push(root.data);
            return
        }
        this.addLeafNode(root.left, result);
        this.addLeafNode(root.right, result);
    }
    isLeafNode(root) {
        return (root.left === null && root.right === null)
    }
}