// time complexity O(2^(T/M)). T = target M = minimum value in candidates
// Space complexity is O(T/M).
var combinationSum = function (candidates, target) {
    let result = [];

    function combSum(index, path, remaining) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        if (remaining < 0 || index === candidates.length) {
            return;
        }

        let val = candidates[index];

        // TAKE
        path.push(val);
        combSum(index, path, remaining - val);
        path.pop();

        // SKIP
        combSum(index + 1, path, remaining);
    }

    combSum(0, [], target);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));

// sort notes:- while push don't increse index after pop increse index and condition when remining < 0 don't go
// further you will not get any thing