class Solution {
    reverse(head) {
        let curr = head;
        let newHead = null;
        while (curr) {
            [curr.next, curr.prev] = [curr.prev, curr.next];
            newHead = curr;
            curr = curr.prev;
        }
        return newHead;
    }
}