// tc:- At every level, total work = O(n).
// Number of levels = logn  Therefor: T(n)=O(nlogn)   
// space:- Recursion stack? Yes. Depth of recursion: logn So auxiliary space: O(logn)
var sortList = function (head) {
    if (!head || !head.next) return head; // anyone is null return head;

    let slow = head, fast = head;
    let prev = null;
    while (fast && fast.next) {  // if both safe then go inside the loop or else it will throw error
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;       // to split linked list break from moddle how point middle = null;
    let left = sortList(head);
    let right = sortList(slow);

    return merge(left, right);
};

function merge(l1, l2) {
    let dummy = new ListNode(0);   //make dummy to make temp node and at last need refrence of first node
    let temp = dummy;

    while (l1 && l2) {  // both should present then go inside loop
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;   // every time in loop we will connect temp.next to smaller node and move temp forward
    }
    temp.next = l1 || l2; // after loop end all small element presnt either in l1 and l2 so we will connect
    // temp.next to n1 if present else l2   if(l1) temp.next = l1 else temp.next = l2

    return dummy.next; // dummy is 0 so dummy.next;
}


// tc:- Split into two halves → log n levels
// Work per level → n
// Therefore → O(n log n).