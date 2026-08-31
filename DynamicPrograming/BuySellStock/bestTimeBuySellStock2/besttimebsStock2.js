// recursion
// tc:- o(2^n) sc:- o(n)
var maxProfit = function (prices) {
    let n = prices.length;
    function helper(ind, flag) {
        if (ind == n) return 0;

        if (flag) {
            return Math.max(-prices[ind] + helper(ind + 1, 0), helper(ind + 1, 1));
        } else {
            return Math.max(+prices[ind] + helper(ind + 1, 1), helper(ind + 1, 0));
        }
    }
    return helper(0, 1);
};

// memo 
var maxProfit = function (prices) {
    let n = prices.length;
    let memo = {};

    function helper(ind, flag) {
        if (ind == n) return 0;
        let key = `${ind},${flag}`;
        if (key in memo) return memo[key];

        if (flag) {
            return memo[key] = Math.max(-prices[ind] + helper(ind + 1, 0), helper(ind + 1, 1));
        } else {
            return memo[key] = Math.max(+prices[ind] + helper(ind + 1, 1), helper(ind + 1, 0));
        }
    }
    return helper(0, 1);
};

// 2 variable

var maxProfit = function (prices) {
    let n = prices.length;
    let buy = -prices[0];
    let sell = 0;

    for (let i = 0; i < n; i++) {
        let oldbuy = buy;

        buy = Math.max(buy, -prices[i] + sell);
        sell = Math.max(sell, prices[i] + oldbuy);
    }
    return sell;
};


// Approach	    TC	            SC
// Recursion	O(2ⁿ)	        O(n)
// Memoization	O(n × 2) = O(n)	O(n × 2) = O(n)
// 2 Variables	O(n)	        O(1)


// Think of it as 2 states for every day:
// buy  = best profit if I am holding a stock
// sell = best profit if I don't have a stock

// For every price:
// BUY:
// buy = max(
//     old buy,              // don't buy
//     sell - price          // buy today
// )
// SELL:
// sell = max(
//     old sell,             // don't sell
//     old buy + price       // sell today
// )


// buy  = -7
// sell =  0
// i	price	oldBuy	new buy	            new sell
// 1	1	    -7	    max(-7, -1+0) = -1	max(0, 1-7) = 0
// 2	5	    -1	    max(-1, -5+0) = -1	max(0, 5-1) = 4
// 3	3	    -1	    max(-1, -3+4) = 1	max(4, 3-1) = 4
// 4	6	     1	    max(1, -6+4) = 1	max(4, 6+1) = 7
// 5	4	     1	    max(1, -4+7) = 3	max(7, 4+1) = 7

// One-line memory  At every price: decide whether to BUY, SELL, or DO NOTHING, and keep the better profit.


// why buy = -prices[i] + sell
// buy :- how much max money is in my account
// Suppose today's price is 5.
// sell = 4
// Means: Yesterday, I had ₹4 profit in our account how much money will be in my account if we buy this 5 price stock. = -1
// Now I BUY today: 4 - 5 = -1

// sell :- how much max money is in my account
// sell = prices[i] + oldBuy
// Suppose:
// oldBuy = -1 price = 5
// Means: I previously bought the stock in my account -1, if i sell this 5 price stock how much is in my bank= -1+5 = 4.
// Now I SELL today: -1 + 5 = 4




