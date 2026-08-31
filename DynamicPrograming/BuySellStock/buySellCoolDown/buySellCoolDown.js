// recursion tc:- o(2^n) sc:-o(n)

var maxProfit = function (prices) {
    let n = prices.length;

    function helper(ind, buy) {
        if (ind >= n) return 0; // after sell we increse +2 there is change it excced n so make it ind>=n else return index exceed
        if (buy) {
            return Math.max(-prices[ind] + helper(ind + 1, 0), helper(ind + 1, 1))
        } else {
            return Math.max(prices[ind] + helper(ind + 2, 1), helper(ind + 1, 0))
        }
    }
    return helper(0, 1)
};

// memo tc:- o(n) sc:-o(n)
var maxProfit = function (prices) {
    let n = prices.length;
    let memo = {};

    function helper(ind, flag) {
        if (ind >= n) return 0;
        let key = `${ind},${flag}`;
        if (key in memo) return memo[key];

        if (flag) {
            return memo[key] = Math.max(-prices[ind] + helper(ind + 1, 0), helper(ind + 1, 1));
        } else {
            return memo[key] = Math.max(+prices[ind] + helper(ind + 2, 1), helper(ind + 1, 0));
        }
    }
    return helper(0, 1);
};

// variable tc:- o(2^n) sc:-o(1)

var maxProfit = function (prices) {
    let n = prices.length;
    let buy = -Infinity;
    let sell = 0;
    let prevSell = 0;
    for (let price of prices) {
        let oldbuy = buy;
        let oldsell = sell;
        buy = Math.max(buy, prevSell - price);
        sell = Math.max(sell, oldbuy + price);

        prevSell = oldsell;
    }

    return sell;
};

// why we need oldsell(this is previous sell), coz we need to make prevSell(this is previous of previous)
// this prevSell will maintain the cooldown period

// oldbuy you need to sell the stock

// prevSell stores the sell profit from 2 days ago, so when we buy today, we automatically skip yesterday (cooldown day).

// SELL → COOLDOWN → BUY
//  ↑
// prevSell

// That's how prevSell enforces the cooldown.