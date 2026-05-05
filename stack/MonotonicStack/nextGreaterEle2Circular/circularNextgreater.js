var nextGreaterElements = function (nums) {
    let result = [];
    let stack = [];
    let n = nums.length;
    for (let j = 2 * n - 1; j >= 0; j--) {
        let i = j % n;
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        if (j < n) {
            result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        }
        stack.push(nums[i]);
    }
    return result;
};