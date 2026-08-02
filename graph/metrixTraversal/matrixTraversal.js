// how to traverse matrix

const grid = [
    [1, 1, 0],
    [0, 1, 0],
    [1, 1, 1]
]
const row = grid.length;
const col = grid[0].length;
let visited = Array.from({ length: row }, () => new Array(col).fill(false));

function dfs(r, c) {
    if (grid[r][c] == 0) return; // what if node is zero we should visit that so immdeatily stop and return
    visited[r][c] = true;
    if (grid[r][c] == 1) console.log(`(${r},${c})`);
    if (r - 1 >= 0) {
        if (grid[r - 1][c] == 1) {  // instead of using 3 if use && (r-1 >= 0 && grid[r-1][c] == 1 && !visited[r-1][c])
            if (!visited[r - 1][c]) {
                dfs(r - 1, c);
            }
        }
    }
    if (r + 1 <= row - 1) {
        if (grid[r + 1][c] == 1) {
            if (!visited[r + 1][c]) {
                dfs(r + 1, c);
            }

        }
    }
    if (c - 1 >= 0) {
        if (grid[r][c - 1] == 1) {
            if (!visited[r][c - 1]) {
                dfs(r, c - 1);
            }

        }
    }
    if (c + 1 <= col - 1) {
        if (grid[r][c + 1] == 1) {
            if (!visited[r][c + 1]) {
                dfs(r, c + 1);
            }

        }
    }
}
dfs(0, 0);

// This removes all four repeated if blocks and replaces them with one loop. Almost every interviewer expects this style
// because it's shorter, less error-prone, and works for all grid problems.
// const dr = [-1, 1, 0, 0];
// const dc = [0, 0, -1, 1];
// dr and dc are just arrays that store direction changes. dr = Delta Row (how much the row changes) dc = Delta Column (how much the column changes)

// const grid =[
//     [1,1,0],
//     [0,1,0],
//     [1,1,1]
//    ]
//    const row = grid.length;
//    const col = grid[0].length;
//    let visited =Array.from({length:row},()=>new Array(col).fill(false));
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function dfs(r, c) {
    if (grid[r][c] == 0) return;
    visited[r][c] = true;
    if (grid[r][c] == 1) console.log(`(${r},${c})`);
    for (let i = 0; i < 4; i++) {
        var newR = r + dr[i];
        var newC = c + dc[i];
        if ((newR >= 0 && newC >= 0 && newR <= row - 1 && newC <= col - 1)) {
            if (!visited[newR][newC] && grid[newR][newC] == 1) {
                dfs(newR, newC)
            }
        }
    }

}
dfs(0, 0);