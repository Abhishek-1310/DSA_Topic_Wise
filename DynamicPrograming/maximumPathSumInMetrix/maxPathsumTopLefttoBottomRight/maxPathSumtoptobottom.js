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

    function solver(i, j) {
        // Base Case 1: If we reach the starting cell (0, 0), return its value
        if (i === 0 && j === 0) {
            return grid[0][0];
        }

        // Base Case 2: If we go out of bounds, return Infinity 
        // (so Math.min ignores this path)
        if (i < 0 || j < 0) {
            return Infinity;
        }

        // Recursive Step: Get min path from top and left, then add current cell
        let fromTop = solver(i - 1, j);
        let fromLeft = solver(i, j - 1);

        return grid[i][j] + Math.min(fromTop, fromLeft);
    }

    // Start the recursion from the bottom-right corner
    return solver(m - 1, n - 1);
};
