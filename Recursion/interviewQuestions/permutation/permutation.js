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

function permute(nums) {
    const result = [];
    
    function backtrack(currentPath) {
        // BASE CASE: If the path length matches the array length, we have a complete shuffle!
        if (currentPath.length === nums.length) {
            result.push([...currentPath]);
            return;
        }
        
        // Always scan from 0 to the end to find any unused numbers
        for (let i = 0; i < nums.length; i++) {
            if (currentPath.includes(nums[i])) continue;
            
            currentPath.push(nums[i]);
            backtrack(currentPath);
            currentPath.pop();
        }
    }
    
    backtrack([]);
    return result;
}

console.log(permute([1, 2, 3]));
// Output: [, [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
