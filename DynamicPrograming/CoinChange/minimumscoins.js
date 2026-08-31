// recusrion 
var coinChange = function (coins, amount) {
    let n = coins.length;
    function helper(ind, target) {
        if (target == 0) return 0;
        if (ind == 0) {
            if (target % coins[ind] == 0) return target / coins[ind];
            return Infinity;
        }
        let notTake = helper(ind - 1, target); // use ind-1 to prevent from infinite loop
        let take = Infinity;
        if (coins[ind] <= target) {
            take = 1 + helper(ind, target - coins[ind]);
        }
        return Math.min(take, notTake);
    }
    let ans = helper(n - 1, amount);
    return ans == Infinity ? -1 : ans;
};

// 1d dp
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let tar = 1; tar <= amount; tar++) {
        for (let coin of coins) {
            if (tar >= coin) {
                dp[tar] = Math.min(dp[tar], 1 + dp[tar - coin])
            }

        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount];
};

// Approach	    Time	               Space
// Recursion	O(2^amount)         	O(amount)
// 1D DP	    O(amount × n)	        O(amount)