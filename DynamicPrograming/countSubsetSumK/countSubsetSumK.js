// recusrion time exceed
class Solution {
    perfectSum(arr, target) {
        // code here
        function countS(ind, target) {
            if (ind == arr.length) {
                return target == 0 ? 1 : 0;
            }

            let pick = countS(ind + 1, target - arr[ind]);

            let notPick = countS(ind + 1, target);

            return pick + notPick;
        }
        return countS(0, target)
    }
}

// memoizantion
class Solution {
    perfectSum(arr, target) {
        // code here
        let memo = {};
        function countS(ind, target) {
            if (ind == arr.length) {
                return target == 0 ? 1 : 0;
            }
            let key = `${ind},${target}`;
            if (key in memo) return memo[key];
            let pick = countS(ind + 1, target - arr[ind]);

            let notPick = countS(ind + 1, target);
            memo[key] = pick + notPick
            return memo[key];
        }
        return countS(0, target)
    }
}
// 1d dp
class Solution {
    perfectSum(arr, target) {
        // code here
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

// Approach	        Time Complexity	   Space Complexity
// 1. Recursion	    O(2^n)	           O(n)
// 2. Memoization (2D DP)O(n × target) O(n × target)
// 3. 1D DP ⭐	   O(n × target)	  O(target)