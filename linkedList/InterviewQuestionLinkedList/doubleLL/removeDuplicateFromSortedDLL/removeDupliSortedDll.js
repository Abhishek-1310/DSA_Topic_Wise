class Solution {

    removeDuplicates(headRef) {
        let temp = headRef;
        while (temp && temp.next) {
            let nextnode = temp.next;
            while (nextnode && temp.data === nextnode.data) nextnode = nextnode.next;
            temp.next = nextnode;
            if (nextnode) nextnode.prev = temp;
            temp = nextnode;
        }
        return headRef;

    }
}