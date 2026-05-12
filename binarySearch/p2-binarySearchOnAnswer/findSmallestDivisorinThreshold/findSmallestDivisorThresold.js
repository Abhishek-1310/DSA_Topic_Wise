// time complexity:- O(nlog(MaxNums))

var smallestDivisor = function (nums, threshold) {
    let l = 1;
    let r = Math.max(...nums);
    let ans = r;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (thres(nums, threshold, mid)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};

function thres(nums, threshold, mid) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += Math.ceil(nums[i] / mid);
    }
    return sum <= threshold;
}

//optimised helper 
function thres(nums, threshold, mid) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += Math.ceil(nums[i] / mid);
        if (sum > threshold) {
            return false;
        }
    }
    return sum <= threshold;
}