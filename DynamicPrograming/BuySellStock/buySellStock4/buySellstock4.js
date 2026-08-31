// recusrion same tc sc buy sell 3

var maxProfit = function (k, prices) {
    let n = prices.length;

    function helper(ind, flag, cap) {
        if (cap == 0) return 0;
        if (ind == n) return 0;
        if (flag) {
            return Math.max((-prices[ind] + helper(ind + 1, 0, cap)), (helper(ind + 1, 1, cap)));
        } else {
            return Math.max((prices[ind] + helper(ind + 1, 1, cap - 1)), (helper(ind + 1, 0, cap)));
        }
    }
    return helper(0, 1, k);
};
// memo same tc and sc 3
var maxProfit = function (k, prices) {
    let n = prices.length;
    let memo = {};

    function helper(ind, flag, cap) {
        if (cap == 0) return 0;
        if (ind == n) return 0;
        let key = `${ind},${flag},${cap}`;
        if (key in memo) return memo[key];
        if (flag) {
            return memo[key] = Math.max((-prices[ind] + helper(ind + 1, 0, cap)), (helper(ind + 1, 1, cap)));
        } else {
            return memo[key] = Math.max((prices[ind] + helper(ind + 1, 1, cap - 1)), (helper(ind + 1, 0, cap)));
        }
    }
    return helper(0, 1, k);
};

// variable
// TC: O(n × k) SC: O(k)
var maxProfit = function (k, prices) {
    let buy = new Array(k + 1).fill(-Infinity);
    let sell = new Array(k + 1).fill(0);

    for (let price of prices) {
        for (i = 1; i <= k; i++) {
            buy[i] = Math.max(buy[i], sell[i - 1] - price);
            sell[i] = Math.max(sell[i], buy[i] + price);
        }
    }
    return sell[k];
};

//1:- why buy filled -infinity there is a possibily you are buying first you acccount balance can become -ve so don't fill with 0
// you will get max 0 everytime to make fill with -infinity

// 2) Why does buy[t] depend on sell[t-1]?
// The current buy depends on the previous transaction being completed.
// So buy[t] uses sell[t-1].
// For the 1st buy, sell[0] is the starting state (0 transactions completed).

//3:- why i start with 1 c
// that is hy we start i from 1 if we strat from 0 the sell become invalid 0-1 = -1 not present