// got time limit exceeded
class Solution {
    isSubsetSum(arr, sum) {
        function helper(index, sum) {
            if (sum === 0) return true;
            if (index == arr.length) return false;

            return helper(index + 1, sum - arr[index]) || helper(index + 1, sum);
        }
        return helper(0, sum);
    }
}

// Approach	          Time	        Space
// Plain recursion	  O(2^n)	    O(n)
// Memoization	      O(n × sum)	O(n × sum) + O(n) stack
// 2D Tabulation	  O(n × sum)	O(n × sum)

// memo
class Solution {
    isSubsetSum(arr, sum) {
        let memo = {};
        function helper(index, sum) {
            if (sum === 0) return true;
            if (index == arr.length) return false;

            let key = `${index},${sum}`;
            if (key in memo) return memo[key];

            memo[key] = helper(index + 1, sum - arr[index]) || helper(index + 1, sum);

            return memo[key];
        }
        return helper(0, sum);
    }
}

// this is 1d dp

class Solution {
    isSubsetSum(arr, sum) {
        let dp = new Array(sum + 1).fill(false);

        dp[0] = true;

        for (let num of arr) {
            for (let i = sum; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        return dp[sum];
    }
}