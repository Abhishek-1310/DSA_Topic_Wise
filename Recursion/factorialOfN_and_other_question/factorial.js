function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// reverse array using recursion
function reverse(arr, i, n) {
    if (i >= n) {
        console.log("arr", arr)
        return;
    }
    [arr[i], arr[n]] = [arr[n], arr[i]]
    reverse(arr, i + 1, n - 1);
}
reverse([2, 3, 5, 6], 0, 3);

//palindrom
function reverse(arr, i, n) {
    if (i >= n) {
        console.log("true")
        return;
    }
    if (arr[i] != arr[n]) {
        console.log("false");
        return;
    }
    reverse(arr, i + 1, n - 1);
}
reverse([1, 4, 3, 2, 1], 0, 4);