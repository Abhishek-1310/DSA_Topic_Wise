// Time: O(m × n)
// Space: O(m × n) (queue in worst case)
var orangesRotting = function (grid) {
    const row = grid.length;
    const col = grid[0].length;
    const dr = [1, -1, 0, 0];
    const dc = [0, 0, 1, -1];
    let queue = [];
    let time = 0;
    let fresh = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
            } else if (grid[i][j] == 1) {
                fresh += 1;
            }
        }
    }
    if (fresh == 0) return 0;
    while (queue.length && fresh > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let [r, c] = queue.shift();
            for (let j = 0; j < 4; j++) {
                let newR = r + dr[j];
                let newC = c + dc[j];
                if (newR >= 0 && newR < row && newC >= 0 && newC < col) {
                    if (grid[newR][newC] == 1) {
                        fresh--;
                        grid[newR][newC] = 2;
                        queue.push([newR, newC]);
                    }
                }
            }
        }
        time++;
    }
    return fresh == 0 ? time : -1;
};