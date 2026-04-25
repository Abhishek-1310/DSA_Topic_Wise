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
function subseq(arr, index, sum) {
    if (index === arr.length) {
        console.log(sum);
        return;
    }
    
    sum += arr[index]
    subseq(arr, index + 1, sum);


    sum -= arr[index]
    subseq(arr, index + 1, sum);
}

subseq([1, 2, 3], 0, [], 0);

//print count of subsequence whose sum===k
function subseq(arr, index, sum, k, count) {

    if (index === arr.length) {
        return sum === k ? 1 : 0;
    }
    let left = subseq(arr, index + 1, sum + arr[index], k, count);


    let right = subseq(arr, index + 1, sum, k, count);

    return left + right;
}


console.log(subseq([1, 2, 3], 0, [], 0, 3, 0));
