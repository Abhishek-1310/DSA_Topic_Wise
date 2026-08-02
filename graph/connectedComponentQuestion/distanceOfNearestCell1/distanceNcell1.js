//tc:- o(V+e) sc:-o(v) visited
class Solution {
    nearest(grid) {
        // code here
        const r = grid.length;
        const c = grid[0].length;

        let visited = Array.from({ length: r }, () => new Array(c).fill(0));
        let dist = Array.from({ length: r }, () => new Array(c).fill(0));
        let queue = [];

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == 1) {
                    visited[i][j] = 1;
                    queue.push([i, j, 0]);
                }
            }
        }

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, 1, -1];

        let front = 0
        while (front < queue.length) {
            let [row, col, dis] = queue[front++];

            dist[row][col] = dis;
            for (let i = 0; i < 4; i++) {
                let newr = row + dr[i];
                let newc = col + dc[i];
                if (newr >= 0 && newr < r && newc >= 0 && newc < c) {
                    if (!visited[newr][newc]) {
                        visited[newr][newc] = 1;
                        queue.push([newr, newc, dis + 1]);
                    }
                }
            }
        }
        return dist;
    }
}