class Solution {
    graphColoring(v, edges, m) {
        // to store all adjecent node [{0,1,2},{1},...]
        let adj = Array.from({ length: v }, () => []);

        // get all adjcent node and push in array
        for (let [c, n] of edges) {
            adj[c].push(n);
            adj[n].push(c);
        }

        //array for colors
        let color = new Array(v).fill(0);
        // check can we do the color in this node it will check adjcent node have same color or not if yes return false else true
        function isSafe(node, k) {
            for (let i of adj[node]) {
                if (color[i] === k) {
                    return false;
                }
            }
            return true;
        }

        // main recursion function
        function backtrack(node) {
            // when all node covered traversed end recursion
            if (node === v) return true;
            // one by one take all color total m color => can we use all of them ? 
            for (let k = 1; k <= m; k++) {

                if (isSafe(node, k)) {
                    // if color is safe to put on current node then apply
                    color[node] = k;
                    // go to next node
                    if (backtrack(node + 1)) return true;
                    // backtrack remove that color we can't put this color in current node 
                    color[node] = 0;
                }
            }
            // if nothing return false
            return false
        }
        // main function call and return
        return backtrack(0);
    }
}