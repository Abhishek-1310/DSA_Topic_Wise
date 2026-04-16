//print all subsequence elements
function subseq(arr, index, path) {
    if (index === arr.length) {
        console.log(path);
        return;
    }
    path.push(arr[index]);
    subseq(arr, index + 1, path);

    path.pop();
    subseq(arr, index + 1, path);
}

subseq([1, 2, 3], 0, []);


//print sum of all subsequence elemnts
function subseq(arr, index, path, sum) {
    if (index === arr.length) {
        console.log(sum);
        return;
    }
    path.push(arr[index]);
    sum += arr[index]
    subseq(arr, index + 1, path, sum);

    path.pop();
    sum -= arr[index]
    subseq(arr, index + 1, path, sum);
}

subseq([1, 2, 3], 0, [], 0);

//print count of subsequence whose sum===k
function subseq(arr, index, path, sum, k, count) {

    if (index === arr.length) {
        return sum === k ? 1 : 0;
    }
    path.push(arr[index]);
    let left = subseq(arr, index + 1, path, sum + arr[index], k, count);

    path.pop();
    let right = subseq(arr, index + 1, path, sum, k, count);

    return left + right;
}


console.log(subseq([1, 2, 3], 0, [], 0, 3, 0));