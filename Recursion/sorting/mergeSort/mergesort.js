
//time complecity:-  o(nlogn)
//space complexity:- 0(n)
// it is stable sort, meaning it preserves the relative order of equal elements

function mergeSort(arr, low, high) {
    if (low >= high) return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);

}
function merge(arr, low, mid, high) {
    let result = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            result.push(arr[left]);
            left++;
        } else {
            result.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        result.push(arr[left]);
        left++;
    }
    while (right <= high) {
        result.push(arr[right]);
        right++
    }
    for (let i = low; i <= high; i++) {
        arr[i] = result[i - low];
    }
}
arr = [2, 1, 3, 5, 4, 6, 7, 8]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)

