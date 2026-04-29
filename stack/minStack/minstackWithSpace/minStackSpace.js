var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.minStack.length == 0 || this.minStack[this.minStack.length - 1] >= val) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function () {
    let val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};