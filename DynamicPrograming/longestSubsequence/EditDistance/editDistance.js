// recursion
var minDistance = function (word1, word2) {
    let l1 = word1.length;
    let l2 = word2.length;

    function helper(i, j) {
        if (i == 0) return j;
        if (j == 0) return i;

        if (word1[i - 1] == word2[j - 1]) {
            return helper(i - 1, j - 1);
        } else {
            return Math.min(
                1 + helper(i, j - 1),       // insert
                1 + helper(i - 1, j),       // delete
                1 + helper(i - 1, j - 1)    // replace
            );
        }
    }
    return helper(l1, l2);
};

// memo
var minDistance = function (word1, word2) {
    let l1 = word1.length;
    let l2 = word2.length;
    let memo = {};

    function helper(i, j) {
        if (i == 0) return j;
        if (j == 0) return i;

        let key = `${i},${j}`;
        if (key in memo) return memo[key];

        if (word1[i - 1] == word2[j - 1]) {
            return memo[key] = helper(i - 1, j - 1);
        } else {
            return memo[key] = Math.min(
                1 + helper(i, j - 1),       // insert
                1 + helper(i - 1, j),       // delete
                1 + helper(i - 1, j - 1)    // replace
            );
        }
    }
    return helper(l1, l2);
};

// 1d dp
var minDistance = function (word1, word2) {
    let l1 = word1.length;
    let l2 = word2.length;

    let dp = new Array(l2 + 1).fill(0);
    for (let j = 0; j <= l2; j++) {
        dp[j] = j;
    }
    for (let i = 1; i <= l1; i++) {
        dp[0] = i;
        let prev = i - 1;
        for (let j = 1; j <= l2; j++) {
            let temp = dp[j];
            if (word1[i - 1] == word2[j - 1]) {
                dp[j] = prev;
            } else {
                dp[j] = 1 + Math.min(prev, dp[j], dp[j - 1]);
            }
            prev = temp;
        }
    }
    return dp[l2];
};



// Why now dp[j] = j, inside for loop?
// Because the meaning of dp is different.
// For Edit Distance: dp[j] = minimum operations to convert  "" → first j characters of word2

// So:
// "" → ""     = 0 operations
// "" → "a"    = 1 insertion
// "" → "ab"   = 2 insertions
// "" → "abc"  = 3 insertions

// Therefore:
// dp = [0, 1, 2, 3, ...]  do you want to  know why go to notes

