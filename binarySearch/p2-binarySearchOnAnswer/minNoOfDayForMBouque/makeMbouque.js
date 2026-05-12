// time complexity is O(nlog(MaxBloomday))
var minDays = function (bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }
    let l = Math.min(...bloomDay);;
    let r = Math.max(...bloomDay);
    let result = r;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (checkDay(bloomDay, m, k, mid)) {
            result = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return result;
};
function checkDay(bloomDay, m, k, mid) {
    let count = 0;
    let bloom = 0;
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= mid) {
            count++
            if (count === k) {
                bloom++;
                count = 0;
            }
        } else {
            count = 0;
        }
    }
    return bloom >= m; // we have done this coz question ask  Can we make AT LEAST m bouquets? not exactly m
}

// but we can optimised checkDay helper function
function checkDay(bloomDay, m, k, mid) {
    let count = 0;
    let bloom = 0;
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= mid) {
            count++
        } else {
            bloom += Math.floor(count / k);
            count = 0;
        }
    }
    bloom += Math.floor(count / k); // this we have done there is change found valid count but didn't enter else part like [1,1,1,1,1]
    return bloom >= m;            // if all 1 it will not enter in else part so                             
}