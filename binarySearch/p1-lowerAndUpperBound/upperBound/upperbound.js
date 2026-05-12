class Solution {
    upperBound(arr, target) {
        let n = arr.length;
        let l = 0;
        let r = n - 1;
        let rIndex = n;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] > target) {
                rIndex = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return rIndex;

    }
}

// notes:- difference in upper or lower bound is
// when you found equal value in lower bound you will go left means right = mid-1;
// when you found equak value in upper bound you will go right means left = mid+1;