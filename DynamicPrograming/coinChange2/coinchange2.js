// tc:- o(amount*coins) sc:- o(amount)
var change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins) {
        for (let amt = coin; amt <= amount; amt++) {
            dp[amt] = dp[amt] + dp[amt - coin];
        }
    }
    return dp[amount];
};

// notes
// Why does sum start from coin?

// Suppose:

// coin = 2

// We cannot use coin 2 to make:

// sum = 0
// sum = 1

// So there is no reason to calculate those using this coin.

// We start at:

// sum = coin

// because that's the smallest amount this coin can make.

// For coin 2:
// sum = 2 → can use 2
// sum = 3 → can use 2 + previous 1
// sum = 4 → can use 2 + previous 2
// ...

// And because the sum goes forward: