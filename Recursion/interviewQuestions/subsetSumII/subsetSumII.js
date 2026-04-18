var subsetsWithDup = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    function subll(nums, path, ind) {
        result.push([...path]);

        for (let i = ind; i < nums.length; i++) {

            if (i > ind && nums[i] === nums[i - 1]) continue;
            path.push(nums[i]);
            subll(nums, path, i + 1);
            path.pop()
        }
    }
    subll(nums, [], 0);
    return result;
};