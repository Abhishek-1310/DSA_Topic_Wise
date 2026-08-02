// how to make Adjency list from edge
class Solution {
    printGraph(V, edges) {
        let adj = Array.from({ length: V }, () => []);

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        return adj;
    }
}