// tc:- o(v+e) sc:- o(v);
var isBipartite = function (graph) {
    let n = graph.length;
    let color = new Array(n).fill(-1);
    function dfs(i) {
        for (let neigh of graph[i]) {
            if (color[neigh] == -1) {
                color[neigh] = 1 - color[i];
                if (!dfs(neigh)) {
                    return false;
                }
            } else {
                if (color[neigh] == color[i]) {
                    return false
                }
            }
        }
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (color[i] == -1) {
            color[i] = 1;
            if (!dfs(i)) {
                return false;
            }
        }
    }
    return true;

};