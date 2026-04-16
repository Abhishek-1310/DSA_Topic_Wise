function SumN(n) {
    if (n === 0) return 0;
    return n + SumN(n - 1);
}
console.log(SumN(5));


// backtracking with using state
function SumN(n, sum) {
    if (n === 0) {
        console.log("sum is", sum);
        return;
    }
    SumN(n - 1, sum + n)
}
SumN(5, 0);