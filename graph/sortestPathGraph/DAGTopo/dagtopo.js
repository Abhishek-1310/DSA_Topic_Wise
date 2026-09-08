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
//kahn's algo

class Solution {
    shortestPath(V, E, edges) {
        // 1. Build Graph & Calculate Initial In-degrees
        let adj = Array.from({ length: V }, () => []);
        let indegree = new Array(V).fill(0);
        
        for (let [u, v, w] of edges) {
            adj[u].push([v, w]);
            indegree[v]++;
        }

        // 2. Push all nodes with In-degree = 0 into the Queue
        let queue = [];
        for (let i = 0; i < V; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        // 3. Initialize Distance Array
        let dist = new Array(V).fill(Infinity);
        dist[0] = 0; // Assuming 0 is the source node

        // 4. Process nodes in Topological Order via the Queue
        while (queue.length > 0) {
            let node = queue.shift();

            // ⚠️ CRITICAL GUARD: Only process neighbors if this node is reachable
            if (dist[node] !== Infinity) {
                for (let [v, w] of adj[node]) {
                    if (dist[node] + w < dist[v]) {
                        dist[v] = dist[node] + w;
                    }
                }
            }

            // Standard Kahn's step: Reduce in-degrees of neighbors
            for (let [v, w] of adj[node]) {
                indegree[v]--;
                if (indegree[v] === 0) {
                    queue.push(v);
                }
            }
        }

        // 5. Clean up unreachable nodes from Infinity to -1
        for (let i = 0; i < V; i++) {
            if (dist[i] === Infinity) {
                dist[i] = -1;
            }
        }

        return dist;
    }
}



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
