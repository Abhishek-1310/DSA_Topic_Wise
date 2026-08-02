//tc:- o(r*c) sc:- o(r*c)
var numEnclaves = function (grid) {
    let r = grid.length;
    let c = grid[0].length;
    let visited = Array.from({ length: r }, () => new Array(c).fill(false));
    const dr = [1, -1, 0, 0];
    const dc = [0, 0, 1, -1];
    let count = 0;
    function dfs(row, col) {
        visited[row][col] = true;
        for (let i = 0; i < 4; i++) {
            let newr = row + dr[i];
            let newc = col + dc[i];
            if (newr >= 0 && newr < r && newc >= 0 && newc < c &&
                !visited[newr][newc] && grid[newr][newc] == 1) {
                dfs(newr, newc);
            }
        }

    }
    for (let i = 0; i < r; i++) {
        if (grid[i][0] == 1) {
            dfs(i, 0);
        }
        if (grid[i][c - 1] == 1) {
            dfs(i, c - 1);
        }
    }
    for (let j = 0; j < c; j++) {
        if (grid[0][j] == 1) {
            dfs(0, j);
        }
        if (grid[r - 1][j] == 1) {
            dfs(r - 1, j);
        }
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (!visited[i][j] && grid[i][j] == 1) {
                count++
            }
        }
    }
    return count;
};