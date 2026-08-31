// Shortest Common Supersequence (SCS)
// A shortest common supersequence is the shortest string that contains both s1 and s2 as subsequences.
// Example: s1 = "ab" s2 = "ac"
// A common supersequence:  "abc"


// 2d dp + backtracking

// TC: O(l1 × l2)
// SC: O(l1 × l2)
var shortestCommonSupersequence = function (str1, str2) {
    let l1 = str1.length;
    let l2 = str2.length;
    //2d dp
    let dp = Array.from({ length: l1 + 1 }, () => new Array(l2 + 1).fill(0));

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let ans = "";

    // backtracking
    function scs(i, j) {

        if (i === 0) {
            while (j > 0) {
                ans += str2[j - 1];
                j--;
            }
            return;
        }

        if (j === 0) {
            while (i > 0) {
                ans += str1[i - 1];
                i--;
            }
            return;
        }

        if (str1[i - 1] === str2[j - 1]) {
            ans += str1[i - 1];
            scs(i - 1, j - 1);
        } else {
            if (dp[i - 1][j] > dp[i][j - 1]) {
                ans += str1[i - 1];
                scs(i - 1, j);
            } else {
                ans += str2[j - 1];
                scs(i, j - 1);
            }
        }
    }

    scs(l1, l2);
    return ans.split('').reverse().join('');
};