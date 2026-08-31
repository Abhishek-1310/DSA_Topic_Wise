// recusrion
// Time  = O(2^n)
// Space = O(n)
class Solution {
    countPartitions(arr, diff) {
        let total = arr.reduce((a, b) => a + b, 0);
        if (diff > total) return 0;
        if ((total + diff) % 2 != 0) return 0;

        let target = (total + diff) / 2;

        function helper(ind, target) {
            if (ind == arr.length) {
                return target == 0 ? 1 : 0;
            }
            let take = helper(ind + 1, target - arr[ind]);
            let notTake = helper(ind + 1, target);

            return take + notTake;
        }
        return helper(0, target)

    }
}

//1d dp

// Time  = O(n × (total + diff))
// Space = O(total + diff)
class Solution {

    countPartitions(arr, diff) {
        let total = arr.reduce((a, b) => a + b, 0);
        if (diff > total) return 0;
        if ((total + diff) % 2 != 0) return 0;

        let target = (total + diff) / 2;

        let dp = new Array(target + 1).fill(0);
        dp[0] = 1;

        for (let val of arr) {
            for (let s = target; s >= val; s--) {
                dp[s] = dp[s] + dp[s - val];
            }
        }
        return dp[target];
    }
}