// give n as a input 
function Num1toN(n) {
    if (n === 0) return;
    console.log(n);
    Num1toN(n - 1);
}
Num1toN(5)

// give 1 (i) as input 
function Num1toN(i, n) {
    if (i > n) return;
    Num1toN(i + 1, n);
    console.log(i);
}
Num1toN(1, 5)