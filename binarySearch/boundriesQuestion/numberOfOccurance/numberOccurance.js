class Solution {
    countFreq(arr, target) {
        let first = this.lower(arr, target);
        if (first === arr.length || arr[first] != target) {
            return 0;
        }
        let last = this.upper(arr, target) - 1;
        return last - first + 1;

    }
    lower(arr, target) {
        let n = arr.length;
        let l = 0;
        let r = n - 1;
        let rInd = n;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] >= target) {
                r = mid - 1;
                rInd = mid;
            } else {
                l = mid + 1;
            }
        }
        return rInd;
    }
    upper(arr, target) {
        let n = arr.length;
        let l = 0;
        let r = n - 1;
        let rInd = n;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] > target) {
                r = mid - 1;
                rInd = mid;
            } else {
                l = mid + 1;
            }
        }
        return rInd;
    }
}