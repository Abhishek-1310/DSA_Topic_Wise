class Solution {
    getCount(head) {
        let size = 0;
        let current = head;
        while (current != null) {
            size++;
            current = current.next;
        }
        return size;
    }
}