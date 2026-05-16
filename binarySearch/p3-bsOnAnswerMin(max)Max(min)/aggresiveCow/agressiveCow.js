// time complexity:- O(nlog(d));
//sorting will take (nlogn) and bs:- d=stall[n]-stall[0]; :- logd with helper class := n total nlogd
// total all timecomplxity is :- O(nlogn+nlogd);
class Solution {
    aggressiveCows(stalls, k) {

        stalls.sort((a, b) => a - b);
        let n = stalls.length;
        let l = 1;
        let r = stalls[n - 1] - stalls[0];
        let result = 0;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (this.possiblePlaceCow(stalls, k, mid)) {
                result = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return result;
    }
    possiblePlaceCow(stalls, k, mid) {
        let cow = 1;
        let lastposition = stalls[0];
        for (let i = 1; i < stalls.length; i++) {
            if (stalls[i] - lastposition >= mid) {
                cow++;
                lastposition = stalls[i];
                if (cow >= k) return true;
            }
        }
        return false;
    }
}