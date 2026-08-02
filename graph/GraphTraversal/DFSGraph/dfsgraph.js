// depth first serach uses recusrion use for loop to end the recusrion for loop act as base case when it traverse all neighbour it stop and return 
// tc:- o(v+e) space:- o(v)
class Solution {
    dfs(adj) {
        // code here
        let v = adj.length;
        let visited = new Array(v).fill(false);
        let result = [];
        function traverse(node) {
            visited[node] = true;
            result.push(node);
            for (let neigh of adj[node]) {
                if (!visited[neigh]) {
                    traverse(neigh);
                }
            }
        }
        traverse(0);
        return result;
    }
}