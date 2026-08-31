// TC: O(l1 × l2), SC: O(l2)
var longestCommonSubsequence = function (text1, text2) {
    let l1 = text1.length;
    let l2 = text2.length;

    let dp = new Array(l2 + 1).fill("");

    for (let i = 1; i <= l1; i++) {
        let prev = "";

        for (let j = 1; j <= l2; j++) {
            let temp = dp[j];

            if (text1[i - 1] == text2[j - 1]) {
                dp[j] = prev + text2[j - 1];
            } else {
                dp[j] = dp[j].length > dp[j - 1].length
                    ? dp[j]
                    : dp[j - 1];
            }

            prev = temp;
        }
    }

    return dp[l2];
};