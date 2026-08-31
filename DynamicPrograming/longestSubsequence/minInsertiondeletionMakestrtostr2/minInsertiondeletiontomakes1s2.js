// tc:- o(l1*l2) sc:- o(l2); 
class Solution {
    minOperations(s1, s2) {
        // code here
        let l1 = s1.length;
        let l2 = s2.length;

        let lcs = this.helper(s1, s2, l1, l2);

        return l1 + l2 - (2 * lcs);

    }

    helper(s1, s2, l1, l2) {
        let dp = new Array(l2 + 1).fill(0);

        for (let i = 1; i <= l1; i++) {
            let prev = 0;
            for (let j = 1; j <= l2; j++) {
                let temp = dp[j];
                if (s1[i - 1] == s2[j - 1]) {
                    dp[j] = 1 + prev;
                } else {
                    dp[j] = Math.max(dp[j], dp[j - 1]);
                }
                prev = temp;
            }
        }
        return dp[l2];
    }
}