// recusrion
// tc:- 3^n sc_ o(n)
var maxProfit = function (prices) {
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
    return helper(0, 1, 2);
};
// memo
// tc:- o(n) sc:- o(n)
var maxProfit = function (prices) {
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
    return helper(0, 1, 2);
};
// 4 variable
// tc o(n) sc:-o(1);
var maxProfit = function (prices) {
    let n = prices.length;
    let buy1 = -prices[0];
    let sell1 = 0;

    let buy2 = -prices[0];
    let sell2 = 0;

    for (let i = 1; i < n; i++) {
        buy1 = Math.max(buy1, -prices[i]);
        sell1 = Math.max(sell1, buy1 + prices[i]);

        buy2 = Math.max(buy2, sell1 - prices[i]);
        sell2 = Math.max(sell2, buy2 + prices[i]);
    }
    return sell2;
};

// how it ensure you have done only 2 transaction and pick only best one
// eailer we were doing max(buy,-prices[i]+sell) means unlimeted transaction to stop this transaction should strat with strating so
// do max(buy1,-prices[i]) here what happen in every index buy1 start with its first transaction no previous transaction data (removed sell) removed unlimited

//  buy2 only depend upon transaction 1  so now take only sell1-prices[i] ensure only 2 transaction sell2 use only buy1 data
// how to ensure it will find max profit loop will go from strating to end everytime start from that index as a first transaction but varible store max one

