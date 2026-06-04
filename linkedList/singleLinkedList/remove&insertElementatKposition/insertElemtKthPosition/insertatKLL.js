// with dummy node 
class Solution {
    insertPos(head, pos, val) {
        let n = new Node(val);
        let dummyNode = new Node(0);
        dummyNode.next = head;
        let curr = dummyNode;
        let p = 0;
        while (curr.next != null && p < pos - 1) {
            p++;
            curr = curr.next;
        }
        n.next = curr.next;
        curr.next = n;
        return dummyNode.next;

    }
}
// without dummy node
class Solution {
    insertPos(head, pos, val) {
        let n = new Node(val);
        if (pos === 1) {
            n.next = head;
            return n;
        }
        let curr = head;
        let p = 1;
        while (curr !== null && p < pos - 1) {
            p++;
            curr = curr.next;
        }
        n.next = curr.next;
        curr.next = n;
        return head;

    }
}