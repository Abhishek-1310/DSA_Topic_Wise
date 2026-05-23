class Solution {
    previousSmallInd(arr) {
        let result = [];
        let stack = [];
        let n = arr.length;

        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }

            result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
            stack.push(i);
        }
        return result;
    }

    nextSmallInd(arr) {
        let result = [];
        let stack = [];
        let n = arr.length;

        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }

            result[i] = stack.length === 0 ? n : stack[stack.length - 1];
            stack.push(i);
        }
        return result;
    }

    getMaxArea(arr) {
        let n = arr.length;
        let maxHis = 0;

        let pSmallInd = this.previousSmallInd(arr);
        let nSmallInd = this.nextSmallInd(arr);

        for (let i = 0; i < n; i++) {
            let width = nSmallInd[i] - pSmallInd[i] - 1;
            let area = arr[i] * width;
            maxHis = Math.max(maxHis, area);
        }

        return maxHis;
    }
}