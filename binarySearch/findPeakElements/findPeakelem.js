var findPeakElement = function (nums) {
    let l = 0;
    let n = nums.length;
    let r = n - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;

        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;

};