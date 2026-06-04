var removeElements = function (head, val) {
    while (head !== null && head.val == val) {
        head = head.next;
    }
    let curr = head;
    while (curr != null && curr.next != null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

// when you don't want to handle special case for val present in starting
// use dummpy approch-> make dummy node point dummy next to header now it changed val at starting to after it
temp = new ListNode(0);
temp.next = head;

Suppose:

head
//  ↓
// 6 -> 1 -> 2 -> null
// After creating dummy:

temp
//  ↓
//  0 -> 6 -> 1 -> 2 -> null

// The 0 is not part of the actual list. It's just a helper node.

var removeElements = function (head, val) {
    temp = new ListNode(0), curr = temp;
    temp.next = head;
    while (curr.next != null) {
        if (curr.next.val == val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    return temp.next;
};