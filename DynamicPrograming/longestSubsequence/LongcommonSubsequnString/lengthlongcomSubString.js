// recursion
// TC: O(2^(n+m))
// SC: O(n+m) — recursion stack
var longestCommonSubsequence = function (text1, text2) {
    let l1 = text1.length;
    let l2 = text2.length;

    function helper(i, j) {
        if (i < 0 || j < 0) return 0;

        if (text1[i] == text2[j]) return 1 + helper(i - 1, j - 1);

        return Math.max(helper(i - 1, j), helper(i, j - 1));
    }
    return helper(l1 - 1, l2 - 1)
};
// memo
// TC: O(n × m)
// SC: O(n × m) memo + O(n+m) recursion stack
var longestCommonSubsequence = function (text1, text2) {
    let l1 = text1.length;
    let l2 = text2.length;
    let memo = {};

    function helper(i, j) {
        if (i < 0 || j < 0) return 0;
        let key = `${i},${j}`;
        if (key in memo) return memo[key];
        if (text1[i] === text2[j]) {
            return memo[key] =
                1 + helper(i - 1, j - 1);
        }
        return memo[key] = Math.max(
            helper(i - 1, j),
            helper(i, j - 1)
        );
    }

    return helper(l1 - 1, l2 - 1);
};

// 1d dp
// dp[j] = answer for the current row up to position j of text2.
// take one elemnt from text1 and comapre with all tex2 and if char match 1+

// Why 1 + prev when characters match? :- "Take this matching character (+1) + the best LCS before both characters."
// Suppose:
// text1[i-1] = 'a'  text2[j-1] = 'a'  // We found one common character → +1.


// Skip either character and keep whichever gives the longer LCS."

// 1d dp
// TC: O(n × m)
// SC: O(m)
var longestCommonSubsequence = function (text1, text2) {
    let l1 = text1.length;
    let l2 = text2.length;

    let dp = new Array(l2 + 1).fill(0);

    for (let i = 1; i <= l1; i++) {
        let prev = 0;
        for (let j = 1; j <= l2; j++) {
            let temp = dp[j];
            if (text1[i - 1] == text2[j - 1]) {  // to get current char from text we need to do i-1 coz 0 based indexing
                dp[j] = 1 + prev;
            } else {
              dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = temp; // if char is not match there is a change they will update the current dp j value but we need 
            // dp[j] of state coz when char match 1+previous best state store in prev
        }
    }
    return dp[l2];
};




// Why prev instead of dp[j] in LCS 1D DP?
// The problem

// When characters match:
// dp[j] = 1 + ?

// We need:

// OLD DIAGONAL
// dp[i-1][j-1]

// But dp[j] represents:
// dp[i-1][j]   ← OLD UP

// So dp[j] is not the diagonal we need. store in temp before updating it

// dp[j] = old UP, but matching needs old DIAGONAL → therefore save old dp[j] in temp, then carry it as prev.
