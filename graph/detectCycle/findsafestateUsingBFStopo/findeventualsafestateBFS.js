// Time: O(V + E) Space: O(V + E)

var eventualSafeNodes = function (graph) {
    let v = graph.length;
    let outDegree = new Array(v).fill(0);
    let adjRev = Array.from({ length: v }, () => []);
    for (let i = 0; i < v; i++) {
        for (let neigh of graph[i]) {
            adjRev[neigh].push(i);
            outDegree[i]++;
        }
    }
    let queue = [];
    for (let i = 0; i < v; i++) {
        if (outDegree[i] == 0) {
            queue.push(i);
        }
    }
    let safeNode = [];
    while (queue.length) {
        let node = queue.shift();
        safeNode.push(node);
        for (let neigh of adjRev[node]) {
            outDegree[neigh]--;
            if (outDegree[neigh] == 0) {
                queue.push(neigh);
            }
        }
    }

    return safeNode.sort((a, b) => a - b);

};