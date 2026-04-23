class Solution {
    maxArea(mat) {
        let hist = new Array(mat[0].length).fill(0);
        let m = mat[0].length;
        let n = mat.length;
        let maxArea = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                hist[j] = mat[i][j] === 0 ? 0 : hist[j] + 1;
            }
            maxArea = Math.max(maxArea, this.mah(hist));
        }
        return maxArea;
    }
    mah(arr) {
        let n = arr.length;
        let nsl = this.nsli(arr);
        let nsr = this.nsri(arr);
        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            let width = nsr[i] - nsl[i] - 1;
            maxArea = Math.max(maxArea, arr[i] * width);
        }
        return maxArea;
    }
    nsli(arr) {
        let result = [];
        let n = arr.length;
        let stack = [];
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            result[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
            stack.push(i);
        }
        return result;
    }
    nsri(arr) {
        let result = [];
        let n = arr.length;
        let stack = [];
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            result[i] = stack.length === 0 ? n : stack[stack.length - 1]
            stack.push(i);
        }
        return result;
    }
}


//sorter version
class Solution {
    maxArea(mat) {
        let hist = new Array(mat[0].length).fill(0);
        let maxA = 0;

        for (let row of mat) {
            // Update histogram heights
            row.forEach((val, j) => hist[j] = val === 0 ? 0 : hist[j] + 1);
            // Calculate max area for current state
            maxA = Math.max(maxA, this.mah(hist));
        }
        return maxA;
    }

    mah(arr) {
        let n = arr.length, maxA = 0;
        let left = this.getBoundaries(arr, true);
        let right = this.getBoundaries(arr, false);

        for (let i = 0; i < n; i++) {
            maxA = Math.max(maxA, arr[i] * (right[i] - left[i] - 1));
        }
        return maxA;
    }

    getBoundaries(arr, isLeft) {
        let n = arr.length, stack = [];
        let result = new Array(n).fill(isLeft ? -1 : n);

        for (let i = isLeft ? 0 : n - 1; isLeft ? i < n : i >= 0; isLeft ? i++ : i--) {
            while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();
            if (stack.length) result[i] = stack[stack.length - 1];
            stack.push(i);
        }
        return result;
    }
}