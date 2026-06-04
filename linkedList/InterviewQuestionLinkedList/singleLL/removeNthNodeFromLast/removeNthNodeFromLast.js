// nive Solution o(n)+o(count-n);
var removeNthFromEnd = function (head, n) {
    let temp = head;
    let count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    let point = count - n;
    if (point == 0) return head.next;
    temp = head;
    while (point > 1) { // u don't have to go to delete node you have to reach one node ahead so you can delete it
        temp = temp.next; // that is why point>1 not point>0;

        point--;
    }
    temp.next = temp.next.next;
    return head;
};

// best approch
var removeNthFromEnd = function (head, n) {
    let fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    if (fast === null) return head.next;
    // head = [1,2,3,4,5]  n = 5 Length is 5, so we need to remove the 5th node from the end.
    // That's actually the 1st node from the start: 1 -> 2 -> 3 -> 4 -> 5 so do head.next 1st element removed
    let slow = head;
    while (fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};