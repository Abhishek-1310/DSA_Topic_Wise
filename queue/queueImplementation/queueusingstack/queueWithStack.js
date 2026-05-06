class myQueue {
    constructor() {
        this.stack = [];
        // Initialize your data members
    }

    enqueue(x) {
        this.stack.push(x);
        // Implement enqueue
    }

    dequeue() {
        if (this.stack.length === 0) return -1;
        if (this.stack.length === 1) return this.stack.pop();

        let temp = this.stack.pop();

        let res = this.dequeue();

        this.stack.push(temp);

        return res;
        // Implement dequeue
    }

    front() {
        if (this.stack.length === 0) return -1;

        if (this.stack.length === 1) {
            return this.stack[this.stack.length - 1];
        }

        let temp = this.stack.pop();

        let res = this.front();

        this.stack.push(temp);

        return res;
        // Return front element
    }

    size() {
        return this.stack.length;
        // Return size of the queue
    }
}