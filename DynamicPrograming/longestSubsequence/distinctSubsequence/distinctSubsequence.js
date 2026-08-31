// recursion
// tc:- o(2^n+2^m) sc:-(n+m);
var numDistinct = function (s, t) {
    let l1 = s.length;
    let l2 = t.length;
    function helper(i, j) {
        if (j < 0) return 1;
        if (i < 0) return 0;

        if (s[i] == t[j]) {
            return helper(i - 1, j - 1) + helper(i - 1, j);
        } else {
            return helper(i - 1, j);
        }
    }
    return helper(l1 - 1, l2 - 1)
};

// memo
// tc:- tc:- o(n*m) sc:- o(n+m)

var numDistinct = function (s, t) {
    let l1 = s.length;
    let l2 = t.length;
    let memo = {};

    function helper(i, j) {
        if (j < 0) return 1;
        if (i < 0) return 0;
        let key = `${i},${j}`;
        if (key in memo) return memo[key];
        if (s[i] == t[j]) {
            return memo[key] = helper(i - 1, j - 1) + helper(i - 1, j);
        } else {
            return memo[key] = helper(i - 1, j);
        }
    }
    return helper(l1 - 1, l2 - 1)
};

// 1d dp
// TC: O(l1 × l2)
// SC: O(l2)
var numDistinct = function (s, t) {
    let l1 = s.length;
    let l2 = t.length;

    let dp = new Array(l2 + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= l1; i++) {
        let prev = dp[0];
        for (let j = 1; j <= l2; j++) {
            let temp = dp[j];

            if (s[i - 1] == t[j - 1]) {
                dp[j] = prev + dp[j]; // taking both possibility liek above :- return memo[key] = helper(i - 1, j - 1) + helper(i - 1, j);
            }        // take  not take
            prev = temp;
        }
    }

    return dp[l2];
};