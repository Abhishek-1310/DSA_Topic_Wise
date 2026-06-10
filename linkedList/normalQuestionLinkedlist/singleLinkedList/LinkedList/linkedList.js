// time complexity :- O(1) for append and print O(n)  : memory 16 byte

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
}

let n1 = new Linkedlist();
n1.append(100);
n1.append(200);
n1.append(300);
n1.print();


// without tail
// time complexity :- O(n) for append and print O(n)  moemory :- 8 byte

function append(data) {
    let node = new Node(data);

    if (this.head == null) {
        this.head = node;
    } else {
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = node;
    }

    this.size++;
}