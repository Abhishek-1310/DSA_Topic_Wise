var minimumTotal = function (triangle) {
    let row = triangle.length;
    function tri(i, j) {
        if (i == row - 1) return triangle[i][j];
        return triangle[i][j] + Math.min(tri(i + 1, j), tri(i + 1, j + 1));
    }
    return tri(0, 0);
};

// memo
var minimumTotal = function (triangle) {
    let row = triangle.length;
    let memo = {}
    function tri(i, j) {
        if (i == row - 1) return triangle[i][j];
        let key = `${i},${j}`;
        if (key in memo) return memo[key];

        return memo[key] = triangle[i][j] + Math.min(tri(i + 1, j), tri(i + 1, j + 1));
    }
    return tri(0, 0);
};
// 1d dp
var minimumTotal = function (triangle) {
    let n = triangle.length;
    let dp = [...triangle[n - 1]];

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};


// Top → Bottom:
// look at parents → j-1, j

// Bottom → Top:
// look at children → j, j+1

// For this triangle:

//         2
//        / \
//       3   4
//      / \ / \
//     6   5   7

// At 3:

// 3's children → 6, 5
//                ↑  ↑
//                j j+1