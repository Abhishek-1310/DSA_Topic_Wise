stack.at(-1) = stack[stack.length - 1]

var subArrayRanges = function (nums) {
    return sumMax(nums) - sumMin(nums);
};

// ---------- MAX ----------
function sumMax(nums) {
    let n = nums.length;
    let l = leftMax(nums);
    let r = rightMax(nums);
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i] * l[i] * r[i];
    }
    return sum;
}

function leftMax(nums) {
    let n = nums.length, stack = [], res = new Array(n);

    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack.at(-1)] < nums[i]) {
            stack.pop();
        }
        res[i] = stack.length ? i - stack.at(-1) : i + 1;
        stack.push(i);
    }
    return res;
}

function rightMax(nums) {
    let n = nums.length, stack = [], res = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack.at(-1)] <= nums[i]) {
            stack.pop();
        }
        res[i] = stack.length ? stack.at(-1) - i : n - i;
        stack.push(i);
    }
    return res;
}

// ---------- MIN ----------
function sumMin(nums) {
    let n = nums.length;
    let l = leftMin(nums);
    let r = rightMin(nums);
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i] * l[i] * r[i];
    }
    return sum;
}

function leftMin(nums) {
    let n = nums.length, stack = [], res = new Array(n);

    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack.at(-1)] > nums[i]) {
            stack.pop();
        }
        res[i] = stack.length ? i - stack.at(-1) : i + 1;
        stack.push(i);
    }
    return res;
}

function rightMin(nums) {
    let n = nums.length, stack = [], res = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack.at(-1)] >= nums[i]) {
            stack.pop();
        }
        res[i] = stack.length ? stack.at(-1) - i : n - i;
        stack.push(i);
    }
    return res;
}