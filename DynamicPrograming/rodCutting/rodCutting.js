class Solution {
    cutRod(price) {
        // code here
        let rod = price.length;

        let dp = new Array(rod + 1).fill(0);

        for (let len = 1; len <= rod; len++) {
            for (let cut = 1; cut <= len; cut++) {
                dp[len] = Math.max(dp[len], price[cut - 1] + dp[len - cut]);
            }
        }
        return dp[rod];
    }
}

// dp[len] = maximum money we can make from a rod of length len

// Why is notTake the same dp[len]?
// Because we're using 1D DP and updating the same state.
// Think of dp[len] as:
// "Best answer I've found so far for this rod length."


// recusrion

class Solution {
    cutRod(price) {
        let rod = price.length;

        function solve(len) {
            // No rod left
            if (len === 0) {
                return 0;
            }

            let maxValue = 0;

            // Try every possible first cut
            for (let cut = 1; cut <= len; cut++) {
                let value = price[cut - 1] + solve(len - cut);

                maxValue = Math.max(maxValue, value);
            }

            return maxValue;
        }

        return solve(rod);
    }
}

// Solution	Time	Space
// Recursion	O(2ⁿ)	O(n)
// 1D DP	O(n²)	O(n)