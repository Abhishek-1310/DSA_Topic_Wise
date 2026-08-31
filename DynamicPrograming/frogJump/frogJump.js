// memoization (top to bottom)
class Solution {
    minCost(height) {
        let n = height.length;
        function jump(n, memo = {}) {
            if (n == 0) return 0;
            if (n in memo) return memo[n];

            let left = jump(n - 1, memo) + Math.abs(height[n] - height[n - 1]);
            let right = Infinity;
            if (n >= 2) { // we can't jump 2 step back from 1 because there no index before 0 so put one condition if index should be > 2 then can jump
                right = jump(n - 2, memo) + Math.abs(height[n] - height[n - 2]);
            }
            memo[n] = Math.min(left, right); // return only minimum possible ans
            return memo[n];
        }
        return jump(n - 1) // index should be n-1 because it zero based indexing
    }
}

// how you find min possible cost is
// :- you're choosing the cheaper of all possible ways to arrive at n. through thsi way we find overall min possible cost


// tabulation (bottom to top)
class Solution {
    minCost(height) {
        let n = height.length;

        let dp = new Array(n).fill(0);

        dp[0] = 0;

        for (let i = 1; i < n; i++) {
            let oneJump =
                dp[i - 1] + Math.abs(height[i] - height[i - 1]);

            let twoJump = Infinity;

            if (i >= 2) {
                twoJump =
                    dp[i - 2] + Math.abs(height[i] - height[i - 2]);
            }

            dp[i] = Math.min(oneJump, twoJump);
        }

        return dp[n - 1];
    }
}

// if you can see n-1 and n-2 there is always optimization of space 
// We can optimize the space from O(n) → O(1).

// Look at the recurrence:
dp[i] = min(
    dp[i - 1] + cost1,
    dp[i - 2] + cost2
)
// To calculate dp[i], we only need:
dp[i - 1]
dp[i - 2]
// We don't need the whole array.
// So keep just two variables:

class Solution {
    minCost(height) {
        // code here
        let n = height.length;

        let prev1 = 0;
        let prev2 = 0;

        for (let i = 1; i < n; i++) {
            let oneJump = prev1 + Math.abs(height[i] - height[i - 1]);

            let twoJump = Infinity;
            if (i >= 2) {
                twoJump = prev2 + Math.abs(height[i] - height[i - 2]);
            }
            let current = Math.min(oneJump, twoJump);

            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
}

// doubt
//The minimum cost required to reach index i from index 0. store in arr in tablue

// In general, in tabulation DP, the dp array stores the answer to each smaller subproblem/state.


// what if instead of 1 and 2 jump what if k jump possible you can make seprate k variable so we can use for loop from 1 jump to k jump
//
class Solution {
    minCost(height, k) {
        let n = height.length;

        let dp = new Array(n).fill(Infinity);

        dp[0] = 0;

        for (let i = 1; i < n; i++) {

            for (let j = 1; j <= k && i - j >= 0; j++) {  // i-j should be after 0 right you can't access -1 in arr of dp tablu

                let cost =
                    dp[i - j] +
                    Math.abs(height[i] - height[i - j]);  // eariler we were doing height[i]-height[i-1/2] instead i-j which is k j is 1,2,3...k

                dp[i] = Math.min(dp[i], cost);
            }
        }

        return dp[n - 1];
    }
}

// Exactly. Earlier, when only 1 or 2 jumps were allowed, we checked:
dp[i] = Math.min(oneJump, twoJump);
// Now with K jumps allowed, we check all possible jumps from 1 to K
// arr[i] = minimum of:
// cost of 1 jump
// cost of 2 jumps
// cost of 3 jumps
// ...
// cost of k jumps

//The cost of reaching i using the current jump j.
//Compare the best cost I've found so far with this new jump's cost.