//tc:- o(n) and sc:- o(n)
class Solution {
    bottomView(root) {
        // code here
        if (!root) return [];

        let map = new Map();
        let queue = [[0, root]];

        let minCol = 0;
        let maxCol = 0;

        let front = 0;

        while (front < queue.length) {
            let [col, node] = queue[front++];

            map.set(col, node.data);

            minCol = Math.min(minCol, col);
            maxCol = Math.max(maxCol, col);

            if (node.left) queue.push([col - 1, node.left]);
            if (node.right) queue.push([col + 1, node.right]);

        }

        let ans = [];

        for (let i = minCol; i <= maxCol; i++) {
            ans.push(map.get(i));
        }
        return ans;
    }
}