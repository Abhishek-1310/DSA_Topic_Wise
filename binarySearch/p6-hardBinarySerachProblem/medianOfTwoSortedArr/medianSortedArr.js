// time complexity = O(loglen1)
var findMedianSortedArrays = function (nums1, nums2) {

    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    // len should calculate after swap
    let len1 = nums1.length;
    let len2 = nums2.length;
    let l = 0;
    let r = len1; // always take smaller arr for binary serach to reduce time
    let TotalLen = len1 + len2;
    let half = Math.floor((TotalLen + 1) / 2);

    while (l <= r) {
        let mid1 = Math.floor((l + r) / 2);
        let mid2 = half - mid1;
        let l1 = -Infinity, l2 = -Infinity; // why becuase on left side we need always max value
        let r1 = Infinity, r2 = Infinity; // why in right we need always min for campre we assign
        if (mid1 < len1) r1 = nums1[mid1]; // if mid1 < len means there is no right elemnts same for r2
        if (mid2 < len2) r2 = nums2[mid2]; // if there is value than assign it to r
        if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1]; // mid1-1 < 0 means there is not element on left
        if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1] // mid2-1< 0 menas there is no elem on left for 2nd array
        //if there is elements then assign l1 and l2

        if (l1 <= r2 && l2 <= r1) {  // this condition tells pastion is correct and in sorted order
            if (TotalLen % 2 === 1) {
                return Math.max(l1, l2); // if len is odd
            }
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2 // if len is even
        } else if (l1 > r2) { // means l1 should decrease so go left by moving right to left
            r = mid1 - 1;
        } else {   // at last l1 should increse so l2 decrease so l2 become < r1
            l = mid1 + 1;
        }
    }
};