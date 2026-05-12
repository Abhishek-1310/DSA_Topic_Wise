// time complexity :- O(nlog(sumOfArr));
var shipWithinDays = function (weights, days) {
    let l = Math.max(...weights);
    let r = weights.reduce((r, s) => s + r, 0);
    let ans = r;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (shipped(weights, days, mid)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};
function shipped(weights, days, minW) {
    let sum = 0;
    let day = 1;
    for (let i = 0; i < weights.length; i++) {
        if (sum + weights[i] <= minW) {
            sum += weights[i];
        } else {
            day++;
            sum = weights[i];
        }
    }
    return day <= days;
}
// optimisez helper function is 
function shipped(weights, days, minW) {
    let sum = 0;
    let day = 1;
    for (let i = 0; i < weights.length; i++) {
        if (sum + weights[i] <= minW) {
            sum += weights[i];
        } else {
            day++;
            if (day > days) {
                return false;
            }
            sum = weights[i];
        }
    }
    return day <= days;
}