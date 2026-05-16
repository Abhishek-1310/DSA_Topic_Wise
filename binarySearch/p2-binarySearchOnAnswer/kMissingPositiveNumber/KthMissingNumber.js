// brute force
var findKthPositive = function (arr, k) {
    let i = 1;
    while (true) {
        if (!arr.includes(i)) {
            k--;
            if (k == 0) {
                return i;
            }
        }
        i++;
    }

};

// optimised
// time complexity   O(logn)
var findKthPositive = function (arr, k) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let missing = arr[mid] - (mid + 1);
        if (missing >= k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l + k;
};