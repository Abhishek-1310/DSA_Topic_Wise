var permute = function (nums) {
    let result = [];

    function permu(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            path.push(arr[i]);
            used[i] = true;
            permu(path, used);
            path.pop();
            used[i] = false;
        }
    }
    permu([], new Array(nums.length).fill(false));
    return result;
};
