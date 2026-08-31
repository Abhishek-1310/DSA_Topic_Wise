function fibonnaci(n) {
    if (n <= 1) return n;
    return fibonnaci(n - 1) + fibonnaci(n - 2);
}
const result = fibonnaci(6);
console.log("result", result)


//memoization (Top-Down DP).

function fibonnaci(n, memo = {}) {
    if (n in memo) return memo[n];

    if (n <= 1) return n;
    memo[n] = fibonnaci(n - 1, memo) + fibonnaci(n - 2, memo);
    return memo[n];
}
// const result = fibonnaci(6);
console.log("result", result);


// Tabulation / Bottom-Up DP.

function fibonnaci(n) {
    if (n <= 1) return n;
    let arr = new Array(n + 1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
// const result = fibonnaci(6);
console.log("result", result)


// | Approach         |     Time |  Space |
// | ---------------- | -------: | -----: |
// | Normal recursion | `O(2^n)` | `O(n)` |
// | Memoization      |   `O(n)` | `O(n)` |
// | Tabulation       |   `O(n)` | `O(n)` |
