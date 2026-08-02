// tc:- o(v+e) sc:-o(v+e) adj
class Solution {
    isCyclic(V, edges) {
        // code here
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
        }

        let indegree = new Array(V).fill(0);
        for (let i = 0; i < V; i++) {
            for (let neigh of adj[i]) {
                indegree[neigh]++;
            }
        }

        let queue = [];
        for (let i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                queue.push(i);
            }
        }

        let count = 0;
        let front = 0;
        while (front < queue.length) {
            let node = queue[front++];
            count++;
            for (let neigh of adj[node]) {
                indegree[neigh]--;
                if (indegree[neigh] == 0) {
                    queue.push(neigh);
                }
            }
        }
        return count < V ? true : false;

    }
}