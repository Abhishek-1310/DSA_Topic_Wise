// with o(n) space and o(n) time complexity 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(60);
head.next.next.next.next = new Node(80);




var reverseBetween = function (head, left, right) {
    let stack = [];
    let curr = head;
    let pos = 1;
    while (curr != null) {
        if (pos >= left && pos <= right) {
            stack.push(curr.data);
        }
        pos++;
        curr = curr.next;
    }
    pos = 1;
    curr = head;
    while (curr != null) {
        if (pos >= left && pos <= right) {
            curr.data = stack.pop();
        }
        curr = curr.next;
        pos++;
    }
    return head;
};
const res = reverseBetween(head, 2, 3);
let curr = res;
while (curr) {
    console.log(curr.data);
    curr = curr.next;
}

// best approch O(1) space complexity and o(n) time

var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(0); // make dummy to do the easy task 
    dummy.next = head;

    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    let curr = prev.next;

    for (let i = 0; i < right - left; i++) {
        let front = curr.next;
        curr.next = front.next;
        front.next = prev.next;
        prev.next = front;
    }
    return dummy.next;
};