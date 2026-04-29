class Solution {
    nextLargerElement(arr) {
        let n = arr.length;
        let result = new Array(n);
        let stack = [];

        for (let i = n - 1; i >= 0; i--) {

            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }

            if (stack.length === 0) {
                result[i] = -1;
            } else {
                result[i] = stack[stack.length - 1];
            }
            stack.push(arr[i]);
        }
        return result;
    }
}