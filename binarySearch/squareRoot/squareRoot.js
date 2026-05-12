class Solution {
    floorSqrt(n) {
        if (n <= 1) return n;
        let i = 0;
        let j = Math.floor(n / 2);
        let ans = 0;
        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (mid * mid === n) return mid;
            if (mid * mid > n) {
                j = mid - 1;
            } else {
                ans = mid
                i = mid + 1;
            }
        }
        return ans;
    }
}