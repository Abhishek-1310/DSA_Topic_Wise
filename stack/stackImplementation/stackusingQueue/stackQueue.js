class myStack {
    constructor() { this.q = []; }

    push(x) {
        this.q.push(x);

        let n = this.size();

        for (let i = 0; i < n - 1; i++) {
            this.q.push(this.q.shift());
        }
        // Inserts an element x at the top of the stack
    }

    pop() {
        return this.q.shift();
        // Removes an element from the top of the stack
    }

    top() {
        if (this.size() === 0) return -1;
        return this.q[0];
        // Returns the top element of the stack
        // If stack is empty, return -1
    }

    size() {
        return this.q.length;
        // Returns the current size of the stack
    }
}