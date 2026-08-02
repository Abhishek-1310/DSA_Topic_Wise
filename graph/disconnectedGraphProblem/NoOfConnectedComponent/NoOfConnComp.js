// to return count of connected component 
// tc:- O(v+E) sc:- o(V+E)

// Every vertex is visited exactly once.
// O(V)
// Every edge is explored exactly once in DFS (or twice in an undirected graph, once from each endpoint, which is still linear).
// O(E)
// Adjacency List Stores every edge. space is  O(V + E)
class Solution {
    countConnected(V, edges) {
        // code here
        let Adj = Array.from({ length: V }, () => [])

        for (let [u, v] of edges) {
            Adj[u].push(v);
            Adj[v].push(u);
        }

        let visited = new Array(V).fill(false);
        let count = 0;
        function dfs(node) {

            visited[node] = true;
            for (let neigh of Adj[node]) {

                if (!visited[neigh]) {
                    dfs(neigh);
                }
            }
        }

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                count++;
                dfs(i);
            }
        }
        return count;
    }
}

// to return node of connected component

class Solution {
    countConnected(V, edges) {
        let Adj = Array.from({ length: V }, () => [])

        for (let [u, v] of edges) {
            Adj[u].push(v);
            Adj[v].push(u);
        }

        let visited = new Array(V).fill(false);
        let result = [];
        function dfs(node, comp) {

            visited[node] = true;
            comp.push(node);
            for (let neigh of Adj[node]) {

                if (!visited[neigh]) {
                    dfs(neigh, comp);
                }
            }
        }

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                let connComp = [];
                dfs(i, connComp);
                result.push(connComp);
            }
        }
        return result;
    }
}