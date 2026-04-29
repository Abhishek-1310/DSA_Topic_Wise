// Node class
class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

class myQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.count = 0;
    }

    isEmpty() {
        return this.front === null;
    }

    enqueue(x) {
        this.count++;
        let node = new Node(x);
        if (this.isEmpty()) {
            // at start both rear and front point to null so at starting we have to move both start rear and front
            this.rear = node;
            this.front = node;
        } else {
            // then from second node we have to move rear so currently rear is point to current node so
            //current.next point to new value new node but still rear point to previous one so do this.rear = node point to current node
            this.rear.next = node;
            this.rear = node;
        }

    }

    dequeue() {
        this.count--;
        let popped = this.front.data;
        this.front = this.front.next;
        // next line we have done becuase when you are at end node after that node is null so you are deleting node from front
        // when you delete that last element also this.front know taht is null but rear is still point to old node 
        // so we have to update rear also that all node deleted no thing is there 
        if (this.front == null) {
            this.rear = null;
        }
        return popped;
    }

    getFront() {
        if (this.isEmpty()) return -1;
        return this.front.data;
    }

    size() {
        return this.count;
    }
}
