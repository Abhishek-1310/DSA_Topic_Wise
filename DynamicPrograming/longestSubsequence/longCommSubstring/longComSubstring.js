// why can't we return dp[l2]
// Because dp[l2] means:
// the longest common substring that ends at the LAST character of s2.
// But the longest substring can end anywhere in s2.

// Example
// s1 = "abc"
// s2 = "abx"
// During DP: dp = [0, 1, 2, 0]
// The longest common substring is: "ab" → length 2
// But: dp[l2] = dp[3] = 0

// because the last characters are:
// c != x
// So returning dp[l2] would give 0, which is wrong.
// Therefore
// For substring:
// dp[j] = length of common substring ENDING at j
// The answer can be anywhere:
// dp = [0, 1, 2, 0, 1, 3, 0, ...]
//              ↑        ↑
//            maybe     maybe
//            answer    answer

// so maninatin ans everytime when update dp[] update ans with max;

// tc:- o(l1*l2) sc:- o(l2)

class Solution {
    longCommSubstr(s1, s2) {
        let l1 = s1.length;
        let l2 = s2.length;
        let ans = 0;
        let dp = new Array(l2 + 1).fill(0);

        for (let i = 1; i <= l1; i++) {
            let prev = 0;
            for (let j = 1; j <= l2; j++) {
                let temp = dp[j];
                if (s1[i - 1] == s2[j - 1]) {
                    dp[j] = 1 + prev;
                    ans = Math.max(ans, dp[j]);
                } else {
                    dp[j] = 0;
                }
                prev = temp;
            }

        }
        return ans;

    }
}