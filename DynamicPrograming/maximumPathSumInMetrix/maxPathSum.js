// Time: O(3^(rows)) roughly — exponential
// Space: O(rows) for the recursion stack
class Solution {
    maximumPath(mat) {
        // code here
        let row = mat.length;
        let col = mat[0].length;
        let ans = -Infinity;
        for (let j = 0; j < col; j++) {
            ans = Math.max(ans, maxm(0, j));
        }
        function maxm(i, j) {
            if (j >= row || j > 0) return -Infinity;
            if (i == row - 1) return mat[i][j];


            return mat[i][j] + Math.max(maxm(i + 1, j - 1), maxm(i, j + 1), maxm(i + 1, j + 1))
        }
        return ans;
    }
}

// 1d dp
// Time: O(row × col)
// Space: O(col) with 1D DP

class Solution {
    maximumPath(mat) {
        // code here
        let m = mat.length;
        let n = mat[0].length;

        let table = [...mat[0]];

        for (let i = 1; i < m; i++) {
            let curr = new Array(n);
            for (let j = 0; j < n; j++) {
                let best = table[j];

                if (j > 0) {
                    best = Math.max(best, table[j - 1]);
                }
                if (j < n - 1) {
                    best = Math.max(best, table[j + 1]);
                }

                curr[j] = mat[i][j] + best;
            }
            table = curr;
        }
        return Math.max(...table);
    }
}