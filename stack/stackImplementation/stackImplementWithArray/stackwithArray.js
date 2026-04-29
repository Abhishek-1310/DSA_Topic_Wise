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
            return;
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
            return -1;
        }
        return this.arr[this.top];
    }
}

//

class myStack {
    constructor(n) {
        this.size = n; // Store size as a property
        this.arr = new Array(n); // Initialize array of size n
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.size - 1; // Top is index, so size-1
    }

    push(x) {
        if (this.isFull()) {
            console.log("Stack Overflow");
            return;
        }
        this.top++;
        this.arr[this.top] = x;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return null;
        }
        return this.arr[this.top--]; // Return value then decrement
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.arr[this.top];
    }
}