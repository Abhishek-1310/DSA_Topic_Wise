// O(2^n * n) #Total subsets = 2^n #Each subset copy takes O(n) (because of [...path])

var subsets = function (nums) {
    let result = []
    function sub( path, index) {
        if (index === nums.length) {
            result.push([...path]);
            return
        }

        path.push(nums[index]);
        sub(path, index + 1);

        path.pop();
        sub(path, index + 1);

    }
    sub( [], 0);
    return result
};
