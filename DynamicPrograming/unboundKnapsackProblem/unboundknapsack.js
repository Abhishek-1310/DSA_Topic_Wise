// 1d dp

class Solution {
    knapSack(val, wt, capacity) {
        // code here
        let n = val.length;

        let dp = new Array(capacity + 1).fill(0);

        for (let i = 0; i < n; i++) {
            for (let w = wt[i]; w <= capacity; w++) {
                dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
            }
        }
        return dp[capacity];
    }
}

// When I calculate dp[x], should dp[x - something] be OLD or UPDATED?

// 1. First ask: What am I processing?

// If the problem says:

// "For every item/coin/number..."

// Usually:

// for (let i = 0; i < n; i++) {       // OUTER
//     for (let x = ...; ...; ...) {   // INNER
//     }
// }

// So:

// OUTER → item / coin / number
// INNER → target / capacity