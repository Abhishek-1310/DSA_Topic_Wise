class QueueUsingOneStack {
    constructor() {
        this.stack = [];
    }

    enqueue(x) {
        this.stack.push(x);
    }

    dequeue() {
        // Base case: if stack is empty
        if (this.stack.length === 0) return -1;

        // Base case: if only one element is left, this is the 'front'
        if (this.stack.length === 1) return this.stack.pop();

        // Recursive step:
        // 1. Pop the top element
        let temp = this.stack.pop();

        // 2. Call dequeue recursively to reach the bottom
        let res = this.dequeue();

        // 3. Push the popped element back onto the stack
        this.stack.push(temp);

        // 4. Return the bottom element found
        return res;
    }
}