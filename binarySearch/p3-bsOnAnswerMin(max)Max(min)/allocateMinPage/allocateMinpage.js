// time complexity is O(nlog(sum(arr)))
class Solution {
    findPages(arr, k) {
        if (arr.length < k) return -1;
        let l = Math.max(...arr);
        let r = arr.reduce((a, c) => a + c, 0);
        let result = r;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (this.assign(arr, k, mid)) {
                result = mid;
                r = mid - 1
            } else {
                l = mid + 1;
            }
        }
        return result;

    }
    assign(arr, k, mid) {
        let sum = 0;
        let st = 1;
        for (let i = 0; i < arr.length; i++) {
            if (sum + arr[i] <= mid) {
                sum += arr[i];
            } else {
                st++;
                sum = arr[i]
                if (st > k) return false;
            }

        }
        return true;
    }
}