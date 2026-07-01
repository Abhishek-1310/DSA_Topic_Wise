// tc:- o(n) (bfs:- o(n) builing ans<=o(n)) sc:- o(n) (queue o(n) , map:- o(n))
class Solution {
    topView(root) {
        // code here
        if (!root) return [];

        let map = new Map();
        let queue = [[0, root]];

        let minCol = 0;
        let maxCol = 0;
        while (queue.length) {
            let [col, node] = queue.shift(); // use front instead of shift shift will take o(n2) but queue[front++] will take o(n)

            if (!map.get(col)) {
                map.set(col, node.data);
            }

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