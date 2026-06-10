class Solution {
    reverseList(head) {

        if (!head || !head.next) return head;

        let newHead = this.reverseList(head.next);
        let front = head.next;
        front.next = head;
        head.next = null;
        return newHead;
    }
}