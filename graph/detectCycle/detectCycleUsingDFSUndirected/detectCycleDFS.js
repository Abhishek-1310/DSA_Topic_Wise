// tc:- o(v+e) sc:- o(v)
class Solution {
    isCycle(V, edges) {
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            adj[v].push(u);
            adj[u].push(v);
        }
        let visited = new Array(V).fill(false);
        function dfs(node, parent) {
            visited[node] = true;
            for (let neigh of adj[node]) {
                if (!visited[neigh]) {
                    if (dfs(neigh, node)) {
                        return true
                    }
                } else if (neigh != parent) {
                    return true;
                }
            }
            return false;
        }
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i, -1)) {
                    return true;
                }
            }
        }
        return false;
    }
}