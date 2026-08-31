// recursion tc:- o(2^n) sc:-o(n)
var maxProfit = function (prices, fee) {
    let n = prices.length;
    function helper(ind, flag) {
        if (ind == n) return 0;

        if (flag) {
            return Math.max(-prices[ind] + helper(ind + 1, 0), helper(ind + 1, 1));
        } else {
            return Math.max(+prices[ind] - fee + helper(ind + 1, 1), helper(ind + 1, 0));
        }
    }
    return helper(0, 1);
};
// memo tc:-o(n) sc:-o(n);

var maxProfit = function (prices, fee) {
    let n = prices.length;
    let memo = {};

    function helper(ind, flag) {
        if (ind == n) return 0;
        let key = `${ind},${flag}`;
        if (key in memo) return memo[key];

        if (flag) {
            return memo[key] = Math.max(-prices[ind] + helper(ind + 1, 0), helper(ind + 1, 1));
        } else {
            return memo[key] = Math.max(+prices[ind] - fee + helper(ind + 1, 1), helper(ind + 1, 0));
        }
    }
    return helper(0, 1);
};

// variable tc:-o(n) sc:-o(1)

var maxProfit = function (prices, fee) {
    let n = prices.length;
    let buy = -prices[0];
    let sell = 0;

    for (let i = 0; i < n; i++) {
        buy = Math.max(buy, -prices[i] + sell);
        sell = Math.max(sell, prices[i] - fee + buy);
    }
    return sell;
};