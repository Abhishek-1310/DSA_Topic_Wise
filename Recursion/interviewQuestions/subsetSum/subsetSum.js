// O(2^n * n) #Total subsets = 2^n #Each subset copy takes O(n) (because of [...path])

var subsets = function (nums) {
    let result = []
    function sub(arr, path, index) {
        if (index === arr.length) {
            result.push([...path]);
            return
        }

        path.push(arr[index]);
        sub(arr, path, index + 1);

        path.pop();
        sub(arr, path, index + 1);

    }
    sub(nums, [], 0);
    return result
};