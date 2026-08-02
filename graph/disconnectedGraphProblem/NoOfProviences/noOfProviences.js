var findCircleNum = function (isConnected) {
    let v = isConnected.length;
    let visited = new Array(v).fill(false);
    let count = 0;

    function dfs(i) {
        visited[i] = true;
        for (let j = 0; j < v; j++) {
            if (isConnected[i][j] == 1 && !visited[j]) {
                dfs(j);
            }
        }

    }

    for (let i = 0; i < v; i++) {
        if (!visited[i]) {
            count++
            dfs(i);
        }
    }
    return count;
};