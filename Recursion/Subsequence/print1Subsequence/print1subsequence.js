function subseq(arr, index, path) {
    if (index === arr.length) {
        console.log(path);
        return true;
    }
    path.push(arr[index]);
    if (subseq(arr, index + 1, path)) {
        return true;
    };

    path.pop();
    if (subseq(arr, index + 1, path)) {
        return true;
    };

    return false;
}

subseq([1, 2, 3], 0, []);

//print subsequence whose sum===k

function subseq(arr, index, path, sum, k) {
    if (index === arr.length) {
        if (sum === k) {
            console.log(path);
            return true;
        }
        return false;
    }
    path.push(arr[index]);
    sum += arr[index]
    if (subseq(arr, index + 1, path, sum, k)) {
        return true;
    }

    path.pop();
    sum -= arr[index]
    if (subseq(arr, index + 1, path, sum, k)) {
        return true;
    }

    return false;
}