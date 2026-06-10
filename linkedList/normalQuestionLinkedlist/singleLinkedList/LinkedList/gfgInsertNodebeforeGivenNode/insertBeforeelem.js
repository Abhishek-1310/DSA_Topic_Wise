//made node first 
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
    insertNodeBeforeGivenNode(data, Bdata) {
        let node = new Node(data);
        if (Bdata === this.head.data) {
            node.next = this.head;
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next != null) {
            if (curr.next.data == Bdata) {
                node.next = curr.next;
                curr.next = node;
                return;
            }
            curr = curr.next;
        }
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

