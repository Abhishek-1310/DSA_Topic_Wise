// not correct
var minimumDifference = function (nums) {
    let sum = nums.reduce((a, b) => a + b, 0);

    function helper(ind, sum1) {
        if (ind === nums.length) {
            let sum2 = sum - sum1;
            return Math.abs(sum1 - sum2);
        }

        let take = helper(ind + 1, sum1 + nums[ind]);
        let notTake = helper(ind + 1, sum1);

        return Math.min(take, notTake);
    }

    return helper(0, 0);
};

// Meet in the Middle

var minimumDifference = function (nums) {
    let half = nums.length / 2;
    let total = nums.reduce((a, b) => a + b, 0);
    let left = nums.slice(0, half);
    let right = nums.slice(half);

    function group(arr) {
        let res = Array.from({ length: half + 1 }, () => []);
        for (let mask = 0; mask < (1 << arr.length); mask++) {
            let count = 0;
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (mask & (1 << i)) {
                    sum += arr[i];
                    count++
                }
            }
            res[count].push(sum);
        }
        return res;

    }

    let group1 = group(left);
    let group2 = group(right);

    for (let gp of group2) {
        gp.sort((a, b) => a - b);
    }

    let ans = Infinity;

    for (let count = 0; count < half; count++) {
        for (let val of group1[count]) {
            let target = total / 2 - val;
            let arr2 = group2[half - count];

            let lo = 0;
            let hi = arr2.length - 1;

            while (lo <= hi) {
                let mid = Math.floor((lo + hi) / 2);
                if (arr2[mid] < target) {
                    lo = mid + 1
                } else {
                    hi = mid - 1;
                }
            }

            if (lo < arr2.length) {
                let selected = val + arr2[lo];
                ans = Math.min(ans, Math.abs(total - 2 * selected));
            }
            if (hi >= 0) {
                let selected = val + arr2[hi];
                ans = Math.min(ans, Math.abs(total - 2 * selected));
            }

        }
    }
    return ans;

};

// Approach	Time	Space
// Recursion / brute force	O(2^n)	O(n)
// Meet in the Middle ⭐	O(n × 2^(n/2))	O(2^(n/2))
// 1D DP	O(n × target)	O(target)  // can't work for -ve value