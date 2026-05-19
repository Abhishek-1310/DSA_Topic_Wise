var searchInsert = function (nums, target) {
    let n = nums.length;
    let l = 0;
    let r = n - 1;
    let ind = n;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] >= target) {
            r = mid - 1;
            ind = mid;
        } else {
            l = mid + 1;
        }
    }
    return ind;
};