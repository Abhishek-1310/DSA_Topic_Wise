// not good approch 

class Solution {
    addOne(node) {
        let head = this.reverse(node);
        let revHead = head;
        let carr = 1;
        while (revHead) {
            let sum = revHead.data + carr;
            if (sum < 10) {
                revHead.data = sum;
                carr = 0;
                break;
            } else {
                revHead.data = 0;
                carr = 1;
            }
            revHead = revHead.next;
        }
        if (carr == 1) {
            let newNode = new Node(carr);
            head = this.reverse(head);
            newNode.next = head;
            return newNode;

        }
        head = this.reverse(head);
        return head;


    }
    reverse(head) {
        let curr = head;
        let prev = null;

        while (curr) {
            let front = curr.next;
            curr.next = prev;
            prev = curr;
            curr = front;
        }
        return prev;
    }
}

// best approch recursion

class Solution {
    addOne(node) {
        let carr = this.add(node); // this fun is for go to last node add 1 and coming back if need add there also and give any carry is there

        if (carr === 1) { // if carry is 1 make new node with that val and attach to head and return new node 
            let newNode = new Node(carr);
            newNode.next = node;
            return newNode;
        }
        return node;  // else return simple head
    }
    add(head) {

        if (!head) return 1; // if you reach at the end of linked list just add 1 and shee if value is less then 9 
        //  then simply addd +1 and return 0 else return 1 and make data =0 
        let carr = this.add(head.next);
        // 9+1 = 10 keep o and 1 carry     if 8+1 = 9 carry = 0  data is 8
        if (carr === 0) return 0;

        if (head.data < 9) {
            head.data++;
            return 0;
        } else {
            head.data = 0;
            return 1;
        }
    }
}