class Solution {
    findMaxFork(root, k) {
        let floor = -1;
        while (root) {
            if (root.data == k) return root.data;
            if (root.data < k) {
                floor = root.data;
                root = root.right;
            } else {
                root = root.left;
            }
        }
        return floor;
    }
}