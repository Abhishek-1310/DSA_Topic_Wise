const n = 4;
const matrix = Array.from({ length: n }, () => Array(n).fill(0));

//       0 1 2 3
//     ----------
// 0 |   0 1 1 0
// 1 |   1 0 1 1
// 2 |   1 1 0 0
// 3 |   0 1 0 0

const edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3]
];

for (const [u, v] of edges) {
    matrix[u][v] = 1;
    matrix[v][u] = 1;
}

console.log(matrix);