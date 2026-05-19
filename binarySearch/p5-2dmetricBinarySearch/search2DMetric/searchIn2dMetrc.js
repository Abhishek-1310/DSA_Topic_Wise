// time complexity :- O(nlog(col));
var searchMatrix = function (matrix, target) {
    let col = matrix[0].length;
    let row = matrix.length;
    for (let i = 0; i < row; i++) {
        let l = 0;
        let r = col - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (matrix[i][mid] === target) {
                return true;
            } else if (matrix[i][mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return false;
};

// time complexity :- O(log(m*n))
// optimized

var searchMatrix = function (matrix, target) {
    let cols = matrix[0].length;
    let rows = matrix.length;
    let l = 0, r = cols * rows - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
};