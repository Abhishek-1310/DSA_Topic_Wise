var uniquePaths = function (m, n) {
    let dp = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n - 1]
};

// recusrion
var uniquePaths = function (m, n) {
    function solve(r, c, memo = {}) {
        // Base Case 1: If we reach the starting cell (0, 0), we found 1 valid path
        if (r === 0 && c === 0) return 1;

        // Base Case 2: Out of bounds check (negative grid indices)
        if (r < 0 || c < 0) return 0;

        // Check cache to avoid recalculating
        let key = r + "," + c;
        if (key in memo) return memo[key];

        // The number of ways to reach this cell is paths from ABOVE + paths from LEFT
        let up = solve(r - 1, c, memo);
        let left = solve(r, c - 1, memo);

        return memo[key] = up + left;
    }

    // Start the recursion from the bottom-right corner destination
    return solve(m - 1, n - 1);
};