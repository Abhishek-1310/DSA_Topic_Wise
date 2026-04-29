class myQueue {
    constructor(n) {
        this.arr = new Array(n);
        this.front = 0;
        this.rear = -1;
        this.currentSize = 0;
        this.size = n;
    }

    isEmpty() {
        return this.currentSize === 0;
    }

    isFull() {
        return this.currentSize === this.size;
    }

    enqueue(x) {
        if (this.isFull()) {
            return;
        }
        // Use % for circular indexing
        this.rear = (this.rear + 1) % this.size;
        this.arr[this.rear] = x;
        this.currentSize++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return -1;
        }
        let popped = this.arr[this.front];
        // Use % for circular indexing
        this.front = (this.front + 1) % this.size;
        this.currentSize--;
        return popped; // Return AFTER updating size
    }

    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }

    getRear() {
        // Need () to call the function
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }
}

