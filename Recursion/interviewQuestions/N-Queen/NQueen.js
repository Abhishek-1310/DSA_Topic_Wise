easy
function solveNQueens(n) {
    const result = [];

    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const cols = new Set();
    const diag1 = new Set(); // row - col
    const diag2 = new Set(); // row + col

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (
                cols.has(col) ||
                diag1.has(row - col) ||
                diag2.has(row + col)
            ) continue;

            // place queen
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            // move to next row
            backtrack(row + 1);

            // remove queen (backtrack)
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return result;
}

// different approch

// moderate;
var solveNQueens = function (n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));

    let col = new Array(n).fill(false);
    let diag1 = new Array(2 * n - 1).fill(false); // row + col
    let diag2 = new Array(2 * n - 1).fill(false); // row - col + n - 1

    function backtrack(row) {
        // ✅ base case
        if (row === n) {
            result.push(board.map(r => r.join("")));
            return;
        }

        for (let c = 0; c < n; c++) {

            // ❌ not safe
            if (col[c] || diag1[row + c] || diag2[row - c + n - 1]) continue;

            // ✅ place queen
            board[row][c] = 'Q';
            col[c] = true;
            diag1[row + c] = true;
            diag2[row - c + n - 1] = true;

            // go next row
            backtrack(row + 1);

            // 🔙 backtrack
            board[row][c] = '.';
            col[c] = false;
            diag1[row + c] = false;
            diag2[row - c + n - 1] = false;
        }
    }

    backtrack(0);
    return result;
};