// tc:- o(v+e) sc:- o(v+e)
class Solution {
    shortestPath(V, edges, src, dest) {
        // code here
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        let dist = new Array(V).fill(Infinity);

        dist[src] = 0;
        let queue = [src];
        while (queue.length) {
            let node = queue.shift();
            if (node == dest) {
                return dist[dest];
            }
            for (let neigh of adj[node]) {
                if (dist[node] + 1 < dist[neigh]) {
                    dist[neigh] = dist[node] + 1;
                    queue.push(neigh);
                }


            }
        }
        return -1;


    }
};

// if destination is not given
// don't stop return eraly let bfs complete then
for (let i = 0; i < V; i++) {
    if (dist[i] === Infinity) {
        dist[i] = -1;
    }
}
return dist;