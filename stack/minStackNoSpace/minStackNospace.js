var MinStack = function () {
    this.stack = [];
    this.min = 0;
};

MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.stack.push(val);
        this.min = val;
    } else if (val >= this.min) {
        this.stack.push(val);
    } else {
        this.stack.push(2 * val - this.min);
        this.min = val;
    }
};


MinStack.prototype.pop = function () {
    let top = this.stack.pop();
    if (top < this.min) {
        this.min = 2 * this.min - top;
    }
};

MinStack.prototype.top = function () {

    let top = this.stack[this.stack.length - 1];
    if (top < this.min) {
        return this.min;
    }
    return top;
};

MinStack.prototype.getMin = function () {
    return this.min;
};