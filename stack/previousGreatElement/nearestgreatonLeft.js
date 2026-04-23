function previousgreaterElement(arr) {
    let n = arr.length;
    let result = [];
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }
    return result;

}

console.log(previousgreaterElement([4, 5, 2, 10, 8]))