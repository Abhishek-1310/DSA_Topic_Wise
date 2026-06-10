class Solution {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    arrayToList(arr) {
        for (let num of arr) {
            let n = new Node(num);
            if (this.head == null) {
                this.head = n;
                this.tail = n;
            } else {
                this.tail.next = n;
                this.tail = n;
            }
        }
        return this.head;

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