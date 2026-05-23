var dailyTemperatures = function (temperatures) {
    let result = [];
    let stack = [];
    let n = temperatures.length;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = 0;
        } else {
            result[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return result;
};