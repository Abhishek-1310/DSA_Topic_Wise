// sol1)
var climbStairs = function (n) {
    if (n <= 2) return n;
    let table = new Array(n + 1).fill(0);

    table[1] = 1;
    table[2] = 2;
    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
};
// sol2

function climb(n, memo = {}) {
    if (n <= 2) return n;

    if (n in memo) return memo[n];

    memo[n] = climb(n - 1, memo) + climb(n - 2, memo);

    return memo[n];
}


// sol3 :- will not work coz of time complexity

function climb(n) {
    if (n <= 2) return n;
    return climb(n - 1, memo) + climb(n - 2, memo);
}