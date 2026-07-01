//tc:- o(n) sc:- o(h)
class Solution {
    leftView(root) {
        let level = 0;
        let ans = [];
        function Lv(node, level) {
            if (!node) return;

            if (level === ans.length) ans.push(node.data);

            Lv(node.left, level + 1);
            Lv(node.right, level + 1);

        }
        Lv(root, level);
        return ans;

    }
}