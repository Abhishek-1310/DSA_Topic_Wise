function Num1toN(n) {
    if (n === 0) return;
    Num1toN(n - 1);
    console.log(n);
}
Num1toN(5)

function Num1toN(i, n) {
    if (i > n) return;
    console.log(i);
    Num1toN(i + 1, n);
}
Num1toN(1, 5)