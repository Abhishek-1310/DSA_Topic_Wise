class Solution {
    deleteNode(head, x) {
        // code here
        if (x == 1) {
            return head.next;
        }
        let pos = 1;
        let curr = head;

        while (curr.next != null && pos < x - 1) {
            curr = curr.next;
            pos++;
        }
        if (curr.next != null && curr != null) {
            curr.next = curr.next.next;
        }
        return head;
    }
}