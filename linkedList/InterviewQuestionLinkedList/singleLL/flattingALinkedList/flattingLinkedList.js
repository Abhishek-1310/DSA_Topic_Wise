// (k lists, N total nodes): O(N × k) space o(1)
class Solution {
    flatten(root) {
        // code here
        if (!root || !root.next) return root;

        let current = root.next;
        while (current) {
            let nextNode = current.next;
            root = this.merge2list(root, current);
            current = nextNode;
            root.next = null;
        }
        return root;
    }
    merge2list(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;
        let dummy = new Node(0);
        let temp = dummy;
        while (l1 && l2) {
            if (l1.data < l2.data) {
                temp.bottom = l1;
                l1 = l1.bottom;
            } else {
                temp.bottom = l2;
                l2 = l2.bottom;
            }
            temp = temp.bottom;
        }
        if (l1) {
            temp.bottom = l1;
        } else {
            temp.bottom = l2;
        }
        return dummy.bottom;
    }
}