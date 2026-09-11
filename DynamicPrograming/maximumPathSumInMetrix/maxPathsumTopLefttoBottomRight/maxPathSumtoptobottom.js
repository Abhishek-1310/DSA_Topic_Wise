var minPathSum = function (grid) {
    let row = grid.length;
    let col = grid[0].length;
    let dp = new Array(col);
    dp[0] = grid[0][0];
    for (let j = 1; j < col; j++) {
        dp[j] = dp[j - 1] + grid[0][j];
    }

    for (let i = 1; i < row; i++) {
        dp[0] = dp[0] + grid[i][0];
        for (let j = 1; j < col; j++) {
            dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
        }
    }
    return dp[col - 1];
};

// recusrion


var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    function call(row, col) {
    // Base Case 1: Reached the starting top-left cell
    if (row === 0 && col === 0) return grid[0][0];
    
    // Base Case 2: Out of bounds (Return Infinity so Math.min ignores it)
    if (row < 0 || col < 0) return Infinity;

    // Corrected to use row and col variables cleanly
    return grid[row][col] + Math.min(call(row, col - 1), call(row - 1, col));
     }


    // Start the recursion from the bottom-right corner
    return call(m - 1, n - 1);
};
