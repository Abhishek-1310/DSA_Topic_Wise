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