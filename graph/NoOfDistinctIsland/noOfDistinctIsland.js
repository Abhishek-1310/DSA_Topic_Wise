// tc:-o(r*c) sc:- o(r*c)
class Solution {
    countDistinctIslands(grid) {
        // code here
        let r = grid.length;
        let c = grid[0].length;
        let visited = Array.from({ length: r }, () => new Array(c).fill(false));
        let dr = [1, -1, 0, 0];
        let dc = [0, 0, 1, -1];
        let count = 0;
        let ans = [];
        let set = new Set();
        function dfs(row, col, br, bc) {
            ans.push([row - br, col - bc])
            visited[row][col] = true;
            for (let i = 0; i < 4; i++) {
                let newr = row + dr[i];
                let newc = col + dc[i];
                if (newr >= 0 && newr < r && newc >= 0 && newc < c &&
                    !visited[newr][newc] && grid[newr][newc] == 'L') {
                    dfs(newr, newc, br, bc);
                }
            }
        }
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == 'L' && !visited[i][j]) {
                    ans = [];
                    dfs(i, j, i, j);
                    set.add(ans.toString());
                }
            }
        }
        return set.size;
    }
}