class Solution {
    findKRotation(arr) {
        // Code Here
        let l = 0;
        let r = arr.length - 1;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] > arr[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return l;
    }
}
