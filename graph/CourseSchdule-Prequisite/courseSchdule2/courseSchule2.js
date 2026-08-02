//tc:- o(v+e) sc:- o(v+e)
var findOrder = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    for (let [u, v] of prerequisites) {
        adj[v].push(u);
    }
    let inDegree = new Array(numCourses).fill(0);
    for (let i = 0; i < numCourses; i++) {
        for (let neigh of adj[i]) {
            inDegree[neigh]++;
        }
    }
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) {
            queue.push(i);
        }
    }
    let topo = [];
    while (queue.length) {
        let node = queue.shift();
        topo.push(node);
        for (let neigh of adj[node]) {
            inDegree[neigh]--;
            if (inDegree[neigh] == 0) {
                queue.push(neigh);
            }
        }
    }
    return topo.length == numCourses ? topo : [];
};