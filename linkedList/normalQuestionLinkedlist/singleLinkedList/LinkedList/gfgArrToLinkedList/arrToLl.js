class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToLinkedList(arr) {
    if (!arr.length) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// How to run:
const list2 = arrayToLinkedList([10, 20, 30]);


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// other way to do it 
class Solution {
    arrayToList(arr) {
        let head = null;
        let tail = null;
        for (let num of arr) {
            let n = new Node(num);
            if (head == null) {
                head = n;
                tail = n;
            } else {
                tail.next = n;
                tail = n;
            }
        }
        return head;
    }
}
