class Solution {
    minMaxDist(stations, K) {
        let l = 0;
        let r = 1e8;

        let ans = 0;
        while (r - l > 1e-6) {
            let mid = (l + r) / 2;
            if (this.pGap(stations, K, mid)) {
                ans = mid;
                r = mid;
            } else {
                l = mid;
            }
        }
        return ans;

    }
    pGap(stations, k, mid) {
        let needStat = 0;
        for (let i = 1; i < stations.length; i++) {
            let gap = stations[i] - stations[i - 1];
            needStat += Math.ceil(gap / mid) - 1;
        }
        return needStat <= k;
    }
}

//
// stations = [1,7]
// mid = 2
// Current gap:
// 7−1=6
// But allowed maximum gap is only:  2 which we will pass by mid which might be one of teh answer
// So we must split this big gap.
Math.ceil(gap / mid) - 1

// For:
// gap = 6  mid = 2   6 / 2=3
// 1 -- - 3 -- - 5 -- - 7
// Meaning:
// need 3 segments(3 gap)
// need 2 stations(3, 5)
// So: 3−1 = 2


// with that mid gap if needStation is more than avialable station return false
why
// needed≤available
// if you need more than you have how it is possible