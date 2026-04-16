var combinationSum2 = function (candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);
    function comdSum2(start, path, remaning) {
        if (remaning === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {

            if (candidates[i] > remaning) break;
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            let val = candidates[i];
            path.push(val);
            comdSum2(i + 1, path, remaning - val);
            path.pop();
        }
    }
    comdSum2(0, [], target);
    return result;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))