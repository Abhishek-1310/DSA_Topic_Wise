//tiem complexity o(nlog(maxPile));
var minEatingSpeed = function (piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let ans = r
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (check(piles, h, mid)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};
function check(arr, t, s) {
    let time = 0;
    for (let i = 0; i < arr.length; i++) {
        time += Math.ceil(arr[i] / s);
    }
    return time <= t;
}