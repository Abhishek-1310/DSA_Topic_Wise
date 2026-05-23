class Solution {
    kthElement(a, b, k) {
        if (a.length > b.length) {
            [a, b] = [b, a];
        }
        let l = Math.max(0, k - b.length);
        let r = Math.min(k, a.length);

        while (l <= r) {
            let mid1 = Math.floor((l + r) / 2);
            let mid2 = k - mid1;
            let l1 = mid1 === 0 ? -Infinity : a[mid1 - 1]; // if mid1 at 0 index before there is no value so -infinte
            let l2 = mid2 === 0 ? -Infinity : b[mid2 - 1]; // -infinity nothing on left side 
            let r1 = mid1 === a.length ? Infinity : a[mid1];// if mid1 at length there is no value at that place out of bound so +infinte
            let r2 = mid2 === b.length ? Infinity : b[mid2]; // infinity nothing on right side

            if (l1 <= r2 && l2 <= r1) {
                return Math.max(l1, l2);
            } else if (l2 > r1) {
                l = mid1 + 1;
            } else {
                r = mid1 - 1;
            }
        }

    }
}


class Solution {
    kthElement(a, b, k) {
        if (a.length > b.length) [a, b] = [b, a];
        let len1 = a.length;
        let len2 = b.length;
        let l = Math.max(0, k - len2);
        let r = Math.min(k, len1);

        while (l <= r) {
            let mid1 = Math.floor((l + r) / 2);
            let mid2 = k - mid1;
            let l1 = -Infinity, l2 = -Infinity;
            let r1 = Infinity, r2 = Infinity;
            if (mid1 < len1) r1 = a[mid1];
            if (mid2 < len2) r2 = b[mid2];
            if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
            if (mid2 - 1 >= 0) l2 = b[mid2 - 1];
            if (l1 <= r2 && l2 <= r1) {
                return Math.max(l1, l2);
            } else if (l1 > r2) {
                r = mid1 - 1;
            } else {
                l = mid1 + 1;
            }


        }

    }
}

// Median: half is fixed automatically

// Kth element:  partition depends on k