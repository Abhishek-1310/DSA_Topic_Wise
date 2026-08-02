// tc:- o(v+e) sc:- o(v)
class Solution {
    isCycle(V, edges) {
        // Code here
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            adj[v].push(u);
            adj[u].push(v);
        }
        let visited = new Array(V).fill(false);

        function bfs(start) {
            let queue = [[start, -1]]
            visited[start] = true;
            while (queue.length) {
                let [node, parent] = queue.shift();
                for (let neigh of adj[node]) {
                    if (!visited[neigh]) {
                        visited[neigh] = true;
                        queue.push([neigh, node]);
                    } else if (neigh != parent) {
                        return true;
                    }
                }
            }
            return false;
        }

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (bfs(i)) {
                    return true;
                }
            }
        }
        return false;
    }
}