// tc:- o(v+e) sc:- o(v)
class Solution {
    isCyclic(V, edges) {
        // code here
        let adj = Array.from({ length: V }, () => []);
        let visited = new Array(V).fill(false);
        let pathVisit = new Array(V).fill(false);

        for (let [u, v] of edges) {
            adj[u].push(v);
        }

        function dfs(i) {
            visited[i] = true;
            pathVisit[i] = true;
            for (let neigh of adj[i]) {
                if (!visited[neigh]) {
                    if (dfs(neigh)) return true
                } else if (pathVisit[neigh]) {
                    return true;
                }
            }
            pathVisit[i] = 0;
            return false;
        }

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i)) {
                    return true;
                }
            }
        }
        return false;
    }
}