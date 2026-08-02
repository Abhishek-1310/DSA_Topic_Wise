// tc:- o(v+e) sc:- o(v+e)
class Solution {
    topoSort(V, edges) {
        // code here
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
        }
        let inorder = new Array(V).fill(0);
        for (let i = 0; i < V; i++) {
            for (let neigh of adj[i]) {
                inorder[neigh] += 1
            }
        }

        let queue = [];
        for (let i = 0; i < V; i++) {
            if (inorder[i] == 0) {
                queue.push(i);
            }
        }

        let topo = [];
        while (queue.length) {
            let node = queue.shift();
            topo.push(node);
            for (let neigh of adj[node]) {
                inorder[neigh] -= 1;
                if (inorder[neigh] == 0) {
                    queue.push(neigh);
                }
            }
        }
        return topo;
    }
}