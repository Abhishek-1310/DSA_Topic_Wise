// Time: O(m × n)
// Space: 1

var numIslands = function (grid) {
    let row = grid.length;
    let col = grid[0].length;
    let count = 0;

    let dr = [1, -1, 0, 0];
    let dc = [0, 0, 1, -1];

    function dfs(r, c) {
        grid[r][c] = "0";
        for (let i = 0; i < 4; i++) {
            let newR = r + dr[i];
            let newC = c + dc[i];
            if (newR >= 0 && newC >= 0 && newR < row && newC < col) {
                if (grid[newR][newC] == "1") {
                    dfs(newR, newC);
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == "1") {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};

// Time: O(m × n)
// Space: o(m*n)

var numIslands = function (grid) {
    let row = grid.length;
    let col = grid[0].length;
    let count = 0;

    let visited = Array.from({ length: row }, () => new Array(col).fill(false));

    let dr = [1, -1, 0, 0];
    let dc = [0, 0, 1, -1];

    function dfs(r, c) {
        visited[r][c] = true;
        for (let i = 0; i < 4; i++) {
            let newR = r + dr[i];
            let newC = c + dc[i];
            if (newR >= 0 && newC >= 0 && newR < row && newC < col) {
                if (!visited[newR][newC] && grid[newR][newC] == "1") {
                    dfs(newR, newC);
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == "1" && !visited[i][j]) {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};