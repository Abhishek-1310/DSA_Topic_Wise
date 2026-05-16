// time complexity = O(nlong(sum(arr)));
var splitArray = function (nums, k) {
    let l = Math.max(...nums);
    let r = nums.reduce((a, c) => a + c, 0);
    let ans = r;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (part(nums, k, mid)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};
function part(nums, k, mid) {
    let sum = 0;
    let part = 1;
    for (let i = 0; i < nums.length; i++) {
        if (sum + nums[i] <= mid) {
            sum += nums[i];
        } else {
            part++;
            sum = nums[i];
            if (part > k) return false;
        }
    }
    return true;
}

// mistake:- if you find max and min from array you have to use spred operator
//like this Math.max/min(...arr);