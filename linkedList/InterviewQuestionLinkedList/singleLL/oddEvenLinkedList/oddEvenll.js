var oddEvenList = function (head) {
    if (!head || !head.next) return head
    let evenHead = head.next;
    let odd = head;
    let even = head.next;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next
    }
    odd.next = evenHead;
    return head;
};