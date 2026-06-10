// best approch tc:- o(n) space:- o(1)
var deleteMiddle = function (head) {
    if (!head || !head.next) return null;
    let prev = head;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;
    return head;
};