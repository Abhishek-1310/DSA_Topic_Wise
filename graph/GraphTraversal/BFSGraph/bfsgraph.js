// tc:- o(v+e) to visit all vertex and edge twice     sc:- o(v) (visited, result, almost stack)
// breadth first search uses queue and while loop but dfs use recusrion dfs 
class Solution {
    bfs(adj) {
        let result = [];
        let v = adj.length;
        let visited = new Array(v).fill(false);
        let queue = [0];
        visited[0] = true;
        while (queue.length) {
            let node = queue.shift();
            result.push(node);

            for (let neigh of adj[node]) {
                if (!visited[neigh]) {
                    queue.push(neigh);
                    visited[neigh] = true;
                }
            }
        }
        return result;
    }
}