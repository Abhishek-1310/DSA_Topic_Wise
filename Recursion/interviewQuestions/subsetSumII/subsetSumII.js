var subsetsWithDup = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    function subll(path, ind) {
        result.push([...path]);

        for (let i = ind; i < nums.length; i++) {

            if (i > ind && nums[i] === nums[i - 1]) continue;
            path.push(nums[i]);
            subll(path, i + 1);
            path.pop()
        }
    }
    subll([], 0);
    return result;
};
