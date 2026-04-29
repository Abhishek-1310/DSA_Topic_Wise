class myQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
        // Initialize your data members
    }

    enqueue(x) {
        this.s1.push(x);
        // Implement enqueue
    }

    dequeue() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
        // Implement dequeue
    }

    front() {
        if (this.s2.length > 0) {
            return this.s2[this.s2.length - 1];
        }
        if (this.s1.length > 0) {
            return this.s1[0];
        }
        return -1;


        // Return front element
    }

    size() {
        return this.s1.length + this.s2.length;
        // Return size of the queue
    }
}