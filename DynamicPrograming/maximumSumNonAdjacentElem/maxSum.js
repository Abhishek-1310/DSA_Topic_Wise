// sc:-o(n) tc:-o(n)
class Solution {
    nonAdjacent(nums) {
        function nAdjelem(index, memo = {}) {
            if (index >= nums.length) return 0;
            if (index in memo) return memo[index];

            let pick = nums[index] + nAdjelem(index + 2, memo)
            let notPick = nAdjelem(index + 1, memo);

            return memo[index] = Math.max(pick, notPick);

        }
        return nAdjelem(0)
    }
}

// tc:o(n)
class Solution {
    nonAdjacent(nums) {
        let n = nums.length;

        if (n === 0) return 0;

        let dp = new Array(n).fill(0);

        dp[0] = nums[0];

        for (let i = 1; i < n; i++) {
            let take = nums[i] + (i >= 2 ? dp[i - 2] : 0);
            let notTake = dp[i - 1];

            dp[i] = Math.max(take, notTake);
        }

        return dp[n - 1];
    }
}

// best solution below

// tc:-o(n) sc:-o(1);
class Solution {
    nonAdjacent(nums) {
        let n = nums.length;

        if (n === 0) return 0;

        let prev2 = 0;
        let prev1 = nums[0];

        for (let i = 1; i < n; i++) {
            let take = nums[i] + prev2;
            let notTake = prev1;

            let curr = Math.max(take, notTake);

            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}