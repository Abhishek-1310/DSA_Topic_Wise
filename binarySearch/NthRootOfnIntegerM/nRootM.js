// time complexity:- O(log m * log n)
//                     power   binary search
class Solution {
    nthRoot(n, m) {

        let l = 0;
        let ans = 0;
        let r = m;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            let val = Math.pow(mid, n);
            if (val === m) {
                return mid;
            } else if (val > m) {
                r = mid - 1;
            } else {
                ans = mid;
                l = mid + 1;
            }
        }
        return -1;

    }

}