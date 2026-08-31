// TC = O(n × targetSum), SC = O(targetSum).  target sum = (total+traget)/2
var findTargetSumWays = function (nums, target) {
    let total = nums.reduce((a, b) => a + b, 0);

    if (total < Math.abs(target)) return 0; // target should not be -ve if it is grater remove -ve target
    if ((total + target) % 2 !== 0) return 0;

    let tar = (total + target) / 2;

    let dp = new Array(tar + 1).fill(0);
    dp[0] = 1;

    for (let num of nums) {
        for (let sum = tar; sum >= num; sum--) {
            dp[sum] = dp[sum] + dp[sum - num];
        }
    }

    return dp[tar];
};