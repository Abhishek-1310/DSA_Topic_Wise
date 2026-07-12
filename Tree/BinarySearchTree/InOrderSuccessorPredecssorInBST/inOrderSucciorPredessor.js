
// O(h) time and O(1) extra space,

class Solution {
    findPreSuc(root, key) {
        // code here
        let pre = null;
        let succ = null;
        while (root) {

            if (root.data < key) {
                pre = root;
                root = root.right;
            } else if (root.data > key) {
                succ = root;
                root = root.left;
            } else { // when key is equal to root data
                let temp = root.left;
                while (temp) {
                    pre = temp;
                    temp = temp.right;
                }

                temp = root.right;
                while (temp) {
                    succ = temp;
                    temp = temp.left;
                }
                break
            }
        }
        return [pre, succ]

    }
}