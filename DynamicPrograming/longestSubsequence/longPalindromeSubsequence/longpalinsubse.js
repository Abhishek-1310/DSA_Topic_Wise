// tc:- o(l1*l2) sc:- o(l2);
var longestPalindromeSubseq = function (s) {
    let rs = s.split('').reverse().join('');

    let l1 = s.length;
    let l2 = rs.length;

    let dp = new Array(l2 + 1).fill(0);

    for (let i = 1; i <= l1; i++) {
        let prev = 0;
        for (let j = 1; j <= l2; j++) {
            let temp = dp[j];

            if (s[i - 1] == rs[j - 1]) {
                dp[j] = 1 + prev;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = temp;

        }
    }
    return dp[l2];
};