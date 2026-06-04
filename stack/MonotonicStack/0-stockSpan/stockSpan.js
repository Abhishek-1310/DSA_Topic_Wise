function stockSpan(arr) {
    let result = [];
    let n = arr.length;
    let stack = [];

    for (let i = 0; i < n; i++) {

        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = i + 1;
        } else {
            result[i] = i - stack[stack.length - 1];
        }
        stack.push(i)
    }
    return result;

}

console.log(previousgreaterElement([6, 3, 2, 4]))


//leetcode solution

var StockSpanner = function () {
    this.stack = [];
};

StockSpanner.prototype.next = function (price) {

    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        this.stack.pop();
    }

    let span;

    if (this.stack.length === 0) {
        span = 1;
    } else {
        span = this.stack[this.stack.length - 1][1] + 1;
    }

    this.stack.push([price, span]);

    return span;
};