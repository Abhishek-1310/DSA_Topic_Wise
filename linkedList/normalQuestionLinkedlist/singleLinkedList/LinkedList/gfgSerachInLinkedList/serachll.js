class Solution {
    searchKey(head, key) {
        let curr = head;
        while (curr != null) {
            if (curr.data == key) {
                return true;
            }
            curr = curr.next;
        }
        return false;

    }
}