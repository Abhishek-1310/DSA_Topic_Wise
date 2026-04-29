class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

class myStack {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    push(x) {
        this.count++;
        let node = new Node(x);
        node.next = this.head;
        this.head = node;
    }

    pop() {
        this.count--;
        let popped = this.head.data;
        this.head = this.head.next;
        return popped;
    }

    peek() {
        if (this.isEmpty()) return -1;
        return this.head.data;
    }

    size() {
        return this.count;
    }
}