//made node first 
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertBefore(data, target) {
        let dummy = new Node(null, this.head);
        let curr = dummy;

        while (curr.next) {
            if (curr.next.data === target) {
                curr.next = new Node(data, curr.next);
                break;
            }
            curr = curr.next;
        }

        this.head = dummy.next;
    }
}


let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

