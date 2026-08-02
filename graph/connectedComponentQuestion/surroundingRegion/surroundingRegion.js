var solve = function (board) {
    let r = board.length;
    let c = board[0].length;
    let visited = Array.from({ length: r }, () => new Array(c).fill(false));
    let dr = [1, -1, 0, 0];
    let dc = [0, 0, 1, -1];

    function dfs(row, col) {
        visited[row][col] = true;
        for (let i = 0; i < 4; i++) {
            let newr = row + dr[i];
            let newc = col + dc[i];
            if (newr >= 0 && newr < r && newc >= 0 && newc < c) {
                if (!visited[newr][newc] && board[newr][newc] == "O") {
                    dfs(newr, newc);
                }
            }
        }
    }

    for (let i = 0; i < r; i++) {
        if (board[i][0] == "O" && !visited[i][0]) {
            dfs(i, 0);
        }
        if (board[i][c - 1] == "O" && !visited[i][c - 1]) {
            dfs(i, c - 1);
        }
    }
    for (let j = 0; j < c; j++) {
        if (board[0][j] == "O" && !visited[0][j]) {
            dfs(0, j);
        }
        if (board[r - 1][j] == "O" && !visited[r - 1][j]) {
            dfs(r - 1, j)
        }
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (board[i][j] == "O" && !visited[i][j]) {
                board[i][j] = "X";
            }
        }
    }

    return board;
};