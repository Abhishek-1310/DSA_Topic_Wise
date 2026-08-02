// Time Complexity
// Build graph → O(E)
// DFS Topological Sort → O(V + E)
// Relaxation → O(E)

// Total: O(V + E)

// Space Complexity
// Adjacency List → O(V + E)
// Visited → O(V)
// Stack → O(V)
// Distance → O(V)

// Total: O(V + E)
class Solution {
    shortestPath(V, E, edges) {
        // code here.
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v, w] of edges) {
            adj[u].push([v, w]);
        }
        let visited = new Array(V).fill(false);
        let stack = [];
        function dfs(i) {
            visited[i] = true;
            for (let [v, w] of adj[i]) {
                if (!visited[v]) {
                    dfs(v)
                }
            }
            stack.push(i);
        }
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                dfs(i);
            }
        }
        let dist = new Array(V).fill(Infinity);
        dist[0] = 0;
        while (stack.length) {
            let node = stack.pop();
            for (let neigh of adj[node]) {
                let v = neigh[0];
                let w = neigh[1];
                if (dist[node] + w < dist[v]) {
                    dist[v] = dist[node] + w;
                }
            }
        }
        for (let i = 0; i < V; i++) {
            if (dist[i] == Infinity) {
                dist[i] = -1;
            }
        }
        return dist;
    }
}