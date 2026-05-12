var searchRange = function (nums, target) {
    let lower = lowerBound(nums, target);
    if (lower === nums.length || nums[lower] !== target) {
        return [-1, -1];
    }
    let upper = upperBound(nums, target);
    return [lower, upper - 1];

};

function lowerBound(nums, target) {
    let n = nums.length;
    let l = 0;
    let r = n - 1;
    let rInd = n;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] >= target) {
            rInd = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return rInd;

}
function upperBound(nums, target) {
    let n = nums.length;
    let l = 0;
    let r = n - 1;
    let rInd = n;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > target) {
            rInd = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return rInd;
}