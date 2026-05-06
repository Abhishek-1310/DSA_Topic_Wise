class myStack {
    constructor(n) {
        this.size = n;
        this.arr = new Array(n);
        this.top = -1;

    }

    isEmpty() {
        return this.top === -1
    }

    isFull() {
        return this.top === this.size - 1;
    }

    push(x) {
        if (this.isFull()) {
            return; //Stack Overflow
        }
        this.top += 1;
        this.arr[this.top] = x;
    }

    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.top--];
    }

    peek() {
        if (this.isEmpty()) {
            return -1; //Stack Underflow
        }
        return this.arr[this.top];
    }
}

// without help of top;

class myStack {
    constructor(n) {
        // Define Data Structures
        this.stack = [];
        this.size = n;
    }

    isEmpty() {
        return this.stack.length === 0;
        // Check if stack is empty
    }

    isFull() {
        return this.stack.length === this.size;
        // Check if stack is full
    }

    push(x) {
        // Push x at the top of the stack
        if (this.isFull()) {
            return;
        }
        this.stack.push(x);
    }

    pop() {
        if (this.isEmpty()) {
            return;
        }
        return this.stack.pop();
        // Removes and element from the top of the stack
    }

    peek() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.stack[this.stack.length - 1];
        // Returns the top element of the stack
    }
}

