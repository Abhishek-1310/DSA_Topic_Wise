/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
*/
class Solution {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    createDLL(arr) {
        for (let n of arr) {
            let node = new Node(n);
            if (this.head == null) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }

        }
        return this.head;
        // code here
    }
}