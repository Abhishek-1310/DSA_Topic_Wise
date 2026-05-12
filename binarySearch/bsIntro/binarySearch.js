// recusrsive 
function bs(arr, st, ed, target) {
    if (st > ed) return -1;
    let mid = Math.floor((st + ed) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return bs(arr, mid + 1, ed, target);
    } else {
        return bs(arr, st, mid - 1, target);
    }

}
console.log(bs([1, 3, 5, 7, 9], 0, 5, 7));

// non recursive
function bs(arr, n, target) {
    let st = 0; ed = n - 1;
    while (st <= ed) {
        let mid = Math.floor((st + ed) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) ed = mid - 1;
        else st = mid + 1;
    }
    return -1;

}
console.log(bs([1, 3, 5, 7, 9], 5, 5));