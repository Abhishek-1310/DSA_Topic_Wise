// time complexity :- Worst case: move left n times move down m times

// Total: m+n So: tc:-  O(m+n)
var searchMatrix = function (matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let c = cols - 1, r = 0;
    while (c >= 0 && r < rows) {
        if (matrix[r][c] === target) {
            return true;
        } else if (matrix[r][c] > target) {
            c--;
        } else {
            r++;
        }
    }
    return false;
};