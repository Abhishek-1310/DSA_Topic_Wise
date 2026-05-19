var findMin = function (nums) {
    let result = Infinity;
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < result) {
            result = nums[mid];
        }
        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return result;

};

// no need of result also directly find without it 

var findMin = function (nums) {

    let l = 0;
    let r = nums.length - 1;

    while (l < r) {

        let mid = Math.floor((l + r) / 2);

        if (nums[mid] > nums[r]) {

            // minimum on right
            l = mid + 1;

        } else {

            // minimum at mid or left
            r = mid;
        }
    }

    return nums[l];
};