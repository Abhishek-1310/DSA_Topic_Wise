class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(data) {
        let node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;

    }
    print() {
        let result = '';
        let current = this.head;
        while (current !== null) {
            result += current.data + '->';
            current = current.next;
        }
        console.log(result + null);
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



function convertArrToLL(arr) {
    let list = new Linkedlist();
    for (let n of arr) {
        list.append(n);
    }
    return list;
}
let n1 = convertArrToLL([20, 30, 50, 70]);
n1.print();
n1.insertNodeBeforeGivenNode(40, 50);
n1.print();