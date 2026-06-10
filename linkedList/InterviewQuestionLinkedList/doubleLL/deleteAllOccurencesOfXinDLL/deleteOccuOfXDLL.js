// tc:- o(n) space:- o(1)
class Solution {
    deleteAllOccurOfX(head, x) {
        // code here
        let curr = head;

        while (curr) {
            if (curr.data == x) {
                if (curr.prev) {
                    curr.prev.next = curr.next;
                } else {
                    head = head.next;
                }
                if (curr.next) {
                    curr.next.prev = curr.prev;
                }
            }
            curr = curr.next;
        }
        return head;
    }
}