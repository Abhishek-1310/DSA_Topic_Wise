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
// 2nd way
var combinationSum2 = function (candidates, target) {
    let result = [];
    
    // 1. SORT the array to group duplicates together
    candidates.sort((a, b) => a - b);

    function combSum(index, path, currentSum) {
        if (currentSum === target) {
            result.push([...path]);
            return;
        }

        if (currentSum > target) {
            return;
        }

        // Loop through the remaining candidates
        for (let i = index; i < candidates.length; i++) {
            // 2. SKIP DUPLICATES: If this number is the same as the previous 
            // number in this loop iteration, skip it to avoid duplicate paths.
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            let val = candidates[i];

            path.push(val);
            // 3. INCREASE INDEX: Pass i + 1 so we move to the next number
            combSum(i + 1, path, currentSum + val);
            path.pop(); // Backtrack
        }
    }

    combSum(0, [], 0);
    return result;
};
    
