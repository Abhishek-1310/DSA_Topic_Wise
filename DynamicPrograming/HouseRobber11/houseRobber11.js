var rob = function (nums) {
    let len = nums.length;
    if (len == 1) return nums[0]
    let temp1 = nums.slice(1);
    let temp2 = nums.slice(0, -1)
    return Math.max(adj(temp1), adj(temp2));

};

function adj(nums) {
    let n = nums.length;

    if (n == 0) return 0;

    let prev1 = nums[0];
    let prev2 = 0

    for (let i = 1; i < n; i++) {
        take = nums[i] + prev2;
        notTake = prev1;

        let curr = Math.max(take, notTake);

        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;

}