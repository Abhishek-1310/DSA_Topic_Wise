class Solution {
    printList(head) {
        let arr = [];
        let curr = head;
        while (curr != null) {
            arr.push(curr.data);
            curr = curr.next;
        }
        return arr;

    }
}