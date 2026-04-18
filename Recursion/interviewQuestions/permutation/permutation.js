var permute = function (nums) {
    let result = [];

    function permu(arr, path, used) {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            path.push(arr[i]);
            used[i] = true;
            permu(arr, path, used);
            path.pop();
            used[i] = false;
        }
    }
    permu(nums, [], new Array(nums.length).fill(false));
    return result;
};