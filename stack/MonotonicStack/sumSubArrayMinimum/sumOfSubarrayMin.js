var sumSubarrayMins = function (arr) {
    const MOD = 1e9 + 7;
    let sum = 0;
    let l = left(arr);
    let r = right(arr);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        sum = (sum + (arr[i] * l[i] * r[i]) % MOD) % MOD;
    }
    return sum;
};

function left(arr) {
    let result = [];
    let stack = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            result[i] = i + 1; // no larger on left index + 1 coz index start from 0 take is as 1 
        } else {
            result[i] = i - stack[stack.length - 1];
        }
        stack.push(i);
    }
    return result
}
function right(arr) {
    let result = [];
    let stack = [];
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = n - i; // moving from rigth to left so larger put on left
        } else {
            result[i] = stack[stack.length - 1] - i; // larger index at left so from right to left larger write on left so it will not give -ve value
        }
        stack.push(i);
    }
    return result;
}

// sort approch
// 🧠 Mapping to your old logic
// Your approach:
// left[i]  = distance to previous smaller
// right[i] = distance to next smaller
// One-pass:
// previous smaller = stack top after pop
// next smaller     = current index (i)

// When popping mid:

//         left boundary        mid        right boundary
//               |              |              |
//             stack[top]     mid index        i

// So:

// left  = mid - stack[top]
// right = i - mid
// ⚠️ Special case
// If stack becomes empty:
// left = mid + 1

var sumSubarrayMins = function (arr) {
    const MOD = 1e9 + 7;
    let stack = [];
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
        while (
            stack.length > 0 &&
            (i === arr.length || arr[stack[stack.length - 1]] > arr[i])
        ) {
            let mid = stack.pop();

            let left = stack.length === 0 ? mid + 1 : mid - stack[stack.length - 1];
            let right = i - mid;

            sum = (sum + arr[mid] * left * right) % MOD;
        }

        stack.push(i);
    }

    return sum;
};