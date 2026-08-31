// recusrion

class Solution {
    knapsack(W, val, wt) {
        // code here
        function helper(ind, wth) {
            if (ind == val.length) return 0;

            let notTake = helper(ind + 1, wth);

            let take = -Infinity;
            if (wth >= wt[ind]) {
                take = val[ind] + helper(ind + 1, wth - wt[ind]);
            }

            return Math.max(take, notTake);
        }

        return helper(0, W);
    }
}

// 2d dp
class Solution {
    knapsack(W, val, wt) {
        // code here
        let n = val.length;
        let dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));

        for (let i = 1; i <= n; i++) {
            for (let w = 1; w <= W; w++) {
                let notTake = dp[i - 1][w];

                let take = -Infinity;

                if (wt[i - 1] <= w) {
                    take = val[i - 1] + dp[i - 1][w - wt[i - 1]];
                }

                dp[i][w] = Math.max(notTake, take);
            }
        }
        return dp[n][W];
    }
}
//1d dp
class Solution {
    knapsack(W, val, wt) {
        // code here
        let n = val.length;
        let dp = new Array(W + 1).fill(0);

        for (let i = 0; i < n; i++) {
            for (let w = W; w >= wt[i]; w--) {
                dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]])
            }
        }
        return dp[W];
    }
}

// Approach	    Time Complexity	Space Complexity
// Recursion	        O(2^n)	    O(n)
// 2D DP (Tabulation)	O(n × W)	O(n × W)
// 1D DP (Space Optimized)O(n × W)	O(W)