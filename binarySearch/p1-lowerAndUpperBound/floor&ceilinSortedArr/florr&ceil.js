class Solution {
    findFloorCeil(arr, k) {

        let f = this.floor(arr, k);
        let c = this.ceil(arr, k);

        return [f, c];
    }

    floor(arr, k) {
        let n = arr.length;
        let l = 0;
        let r = n - 1;
        let ind = -1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (arr[mid] <= k) {
                ind = arr[mid];
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return ind;
    }

    ceil(arr, k) {
        let n = arr.length;
        let l = 0;
        let r = n - 1;
        let ind = -1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (arr[mid] >= k) {
                ind = arr[mid];
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return ind;
    }
}