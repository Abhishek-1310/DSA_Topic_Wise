var maxSumMinProduct = function (nums) {
    let n = nums.length;
    // 1. Build Prefix Sum using BigInt to prevent overflow
    let pSum = new Array(n + 1).fill(0n);
    for (let i = 0; i < n; i++) {
        pSum[i + 1] = pSum[i] + BigInt(nums[i]);
    }
    let maxres = 0n;
    let minPdt = 0;
    let left = pse(nums);
    let right = nse(nums);
    for (let i = 0; i < nums.length; i++) {
        minPdt = BigInt(nums[i]) * (pSum[right[i]] - pSum[left[i] + 1]);
        if (minPdt > maxres) {
            maxres = minPdt;
        }
    }
    const MOD = 1000000007n;
    return Number(maxres % MOD);
};
function pse(nums) { //left
    let result = [];
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return result;
}
function nse(nums) {
    let result = [];
    let stack = [];
    let n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = n;
        } else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return result;
}