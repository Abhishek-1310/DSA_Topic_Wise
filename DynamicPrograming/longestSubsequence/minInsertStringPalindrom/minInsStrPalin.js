// Minimum Insertions = n - Longest Palindromic Subsequence (LPS)
// TC: O(l1 × l2)
// SC: O(l2)
var minInsertions = function (s) {
    let n = s.length;
    let lps = helper(s);
    return n - lps;
};
function helper(s) {
    let rs = s.split('').reverse().join('');
    let l1 = s.length;
    let l2 = rs.length;

    let dp = new Array(l2 + 1).fill(0);
    let ans = 0;
    for (let i = 1; i <= l1; i++) {
        let prev = 0;
        for (let j = 1; j <= l2; j++) {
            let temp = dp[j];

            if (s[i - 1] == rs[j - 1]) {
                dp[j] = 1 + prev;
                ans = Math.max(ans, dp[j]);
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = temp;
        }
    }
    return ans;
}