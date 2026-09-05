var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(n).fill(0);
    // cause and obstacle can block the very first row so start with 0

    if (obstacleGrid[0][0] == 0) {
        dp[0] = 1; //assign 1 if no obstacle
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] = dp[j] + dp[j - 1];
            }

        }
    }
    return dp[n - 1];
};

// in recusrion just add one extra condition
if (obstacleGrid[r][c] == 1) return 0;