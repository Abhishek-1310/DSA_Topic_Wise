class Solution {
    insertAtPos(head, p, x) {
        let node = new Node(x);
        let curr = head;
        while (p > 0) {
            p--;
            curr = curr.next
        }
        node.next = curr.next;
        node.prev = curr;

        if (curr.next) curr.next.prev = node;
        curr.next = node;
        return head;
    }
}