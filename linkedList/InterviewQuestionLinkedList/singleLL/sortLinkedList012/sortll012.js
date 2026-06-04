
// best approch O(n) time complexity

class Solution {
    segregate(head) {
        let zeroHead = new Node(-1);
        let oneHead = new Node(-1);
        let twoHead = new Node(-1);

        let zero = zeroHead;
        let one = oneHead;
        let two = twoHead;

        let temp = head;

        while (temp) {

            if (temp.data === 0) {
                zero.next = temp;
                zero = zero.next;
            }
            else if (temp.data === 1) {
                one.next = temp;
                one = one.next;
            }
            else {
                two.next = temp;
                two = two.next;
            }

            temp = temp.next;
        }

        // connect lists
        zero.next = oneHead.next ? oneHead.next : twoHead.next;
        one.next = twoHead.next;

        two.next = null;

        return zeroHead.next
            ? zeroHead.next
            : (oneHead.next ? oneHead.next : twoHead.next);
    }
}

// nive approch o(2n)

class Solution {
    segregate(head) {
        let zero = 0, one = 0, two = 0;

        let temp = head;

        while (temp) {
            if (temp.data === 0) zero++;
            else if (temp.data === 1) one++;
            else two++;

            temp = temp.next;
        }

        temp = head;

        while (zero--) {
            temp.data = 0;
            temp = temp.next;
        }

        while (one--) {
            temp.data = 1;
            temp = temp.next;
        }

        while (two--) {
            temp.data = 2;
            temp = temp.next;
        }

        return head;
    }
}