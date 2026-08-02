// tc:- o(v+e) sc:- o(v)
var isBipartite = function (graph) {
    let n = graph.length;
    let color = new Array(n).fill(-1);
    function bfs(i) {
        let queue = [i];
        color[i] = 1;
        while (queue.length) {
            let node = queue.shift();
            for (let neigh of graph[node]) {
                if (color[neigh] == -1) {
                    color[neigh] = 1 - color[node]; // if 0 become 1 if 1 become 0;
                    queue.push(neigh);
                } else {
                    if (color[neigh] == color[node]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (color[i] == -1) {
            if (!bfs(i)) {
                return false;
            }
        }
    }
    return true;

};