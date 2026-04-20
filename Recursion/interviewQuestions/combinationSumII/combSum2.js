var combinationSum2 = function (candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);
    function comdSum2(index, path, remaning) {
        if (remaning === 0) {
            result.push([...path]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {

            if (candidates[i] > remaning) break;
            if (i > index && candidates[i] === candidates[i - 1]) continue;

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

//  there is no base case in foor loop recursion so her you have to just skip or move with duplicate and break
//  when current elemnt greater then target so no need to check furher bcz execeed th traget
