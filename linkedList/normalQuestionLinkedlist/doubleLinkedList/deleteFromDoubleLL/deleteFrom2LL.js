class Solution {
    delPos(head, x) {
        // code here
        if (x == 1) {
            head = head.next;
            head.prev = null;
            return head;
        }
        let curr = head;
        let pos = 1;
        while (curr.next != null && pos < x) {
            pos++;
            curr = curr.next;
        }
        // if(curr==null) return head;
        if (curr.prev) curr.prev.next = curr.next;
        if (curr.next) curr.next.prev = curr.prev;

        return head;

    }
}