class Solution {
    celebrity(mat) {
        // code here
        let n = mat.length;
        let i = 0;
        let j = n - 1;
        while (i < j) {
            if (mat[i][j] === 1) {
                i++;
            } else {
                j--;
            }
        }
        let candidate = i;
        for (let k = 0; k < n; k++) {
            if (k !== candidate) {
                if (mat[candidate][k] == 1 || mat[k][candidate] == 0) {
                    return -1;
                }
            }
        }
        return candidate;
    }
}