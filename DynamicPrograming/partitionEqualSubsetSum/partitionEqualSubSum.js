// time limit exceeded
var canPartition = function (nums) {
    let tsum = nums.reduce((a, b) => a + b);

    function call(ind, sum) {
        if (sum === 0) return true;
        if (ind === nums.length) return false;

        return call(ind + 1, sum + nums[ind]) || call(ind + 1, sum);
    }
    return call(0, tsum / 2);
};
// Approach	Time	Space
// Recursion	O(2^n)	O(n)
// Memoization (2D)	O(n × target)	O(n × target)
// 1D DP — your approach	O(n × target)	O(target) ⭐

var canPartition = function (nums) {
    let tsum = nums.reduce((a, b) => a + b);
    if (tsum % 2 !== 0) return false;

    let target = tsum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[target];
};