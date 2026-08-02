//tc:- o(v+e) sc:- o(v)
var eventualSafeNodes = function (graph) {
    let v = graph.length;
    let visit = new Array(v).fill(false);
    let pathvisit = new Array(v).fill(false);
    let mark = new Array(v).fill(0);
    let ans = [];
    function dfs(i) {
        visit[i] = true;
        pathvisit[i] = true;
        for (let neigh of graph[i]) {
            if (!visit[neigh]) {
                if (dfs(neigh)) return true;
            } else if (pathvisit[neigh]) {
                return true;
            }
        }
        mark[i] = 1;
        pathvisit[i] = false;
        return false;
    }

    for (let i = 0; i < v; i++) {
        if (!visit[i]) {
            dfs(i);
        }
    }
    for (let i = 0; i < v; i++) {
        if (mark[i] == 1) {
            ans.push(i);
        }
    }
    return ans;
};