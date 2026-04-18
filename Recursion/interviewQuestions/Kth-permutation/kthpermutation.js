// tc o(n)o(n) =o(n^2)  sc= o(n)

var getPermutation = function (n, k) {
    let arr = []; // arr to store all digit (1,2,3,4) if n=4;
    let fact = 1;
    let ans = '';

    // fill numbers
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        if (i < n) fact *= i; // (n-1)!
    }

    k = k - 1; // convert to 0-based

    while (arr.length > 0) {
        let index = Math.floor(k / fact);

        ans += arr[index];

        arr.splice(index, 1); // remove used number

        if (arr.length === 0) break;

        k = k % fact;
        fact = fact / arr.length;
    }

    return ans;
};