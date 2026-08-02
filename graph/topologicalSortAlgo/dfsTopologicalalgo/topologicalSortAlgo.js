class Solution {
    topoSort(V, edges) {
        // code here
        let visited = new Array(V).fill(false);
        let adj = Array.from({ length: V }, () => []);
        let stack = [];

        for (let [u, v] of edges) {
            adj[u].push(v);
        }

        function dfs(i) {
            visited[i] = true;
            for (let neigh of adj[i]) {
                if (!visited[neigh]) {
                    dfs(neigh);
                }
            }
            stack.push(i);
        }

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                dfs(i);
            }
        }

        let ans = [];
        while (stack.length) {
            ans.push(stack.pop());
        }
        return ans;
    }
}