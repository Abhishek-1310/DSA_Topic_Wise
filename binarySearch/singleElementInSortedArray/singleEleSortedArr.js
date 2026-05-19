var singleNonDuplicate = function (nums) {
    let n = nums.length;
    let l = 0;
    let r = n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[0] !== nums[1]) return nums[0]; // edge case when first element is single 
        if (nums[n - 1] !== nums[n - 2]) return nums[n - 1]; // edge case when last element is single 
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid]; // current element is singel for sure 

        if ((mid % 2 == 1 && nums[mid] === nums[mid - 1]) || (mid % 2 == 0 && nums[mid] === nums[mid + 1])) {
            l = mid + 1;  // means single element on right for sure
        } else {
            r = mid - 1;  // means single element on left for sure
        }
    }
    return -1;
};

// Input: nums = [1,1,2,3,3,4,4,8,8]    4%2==0 num[4](3)===num[mid-1](3)  r=mid-1;
//                0,1,2,3,4,5,6,7,8

// Input: nums = [3,3,7,7,10,11,11]     3%2==1 num[3](7)===nums[mid-1]   l = mid+1;
//                0,1,2,3, 4, 5, 6