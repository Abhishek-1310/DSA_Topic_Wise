var maxSlidingWindow = function (nums, k) {
    let deqeue = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (deqeue.length && deqeue[0] <= i - k) {
            deqeue.shift();
        }
        while (deqeue.length && nums[deqeue[deqeue.length - 1]] < nums[i]) {
            deqeue.pop();
        }
        deqeue.push(i);

        if (i >= k - 1) {
            result.push(nums[deqeue[0]]);
        }
    }
    return result;
};