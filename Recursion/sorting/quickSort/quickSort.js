//time complecity:-  o(nlogn)
//space complexity:- 0(1) better then merge sort
// no stablity equal item may swap
function quickSort(arr, low, high) {
    if (low >= high) return;

    let pivot = arr[low];
    let p = partition(arr, pivot, low, high);
    quickSort(arr, low, p);
    quickSort(arr, p + 1, high);

}
function partition(arr, pivot, low, high) {
    let i = low;
    let j = high;

    while (i < j) {
        while (i < high && arr[i] < pivot) {
            i++;
        }
        while (j > low && arr[j] > pivot) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

    }
    return j;
}


// arr=[2,1,4,7,3,9]
arr = [4, 5, 3, 7, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr);