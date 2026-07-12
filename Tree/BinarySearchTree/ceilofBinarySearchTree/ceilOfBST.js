//tc:- o(h) sc:- o(h)
class Solution {

    findCeil(root, x) {
        let ceil = -1;
        while (root) {
            if (root.data == x) return root.data;

            if (root.data > x) {
                ceil = root.data
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return ceil;
    }

}