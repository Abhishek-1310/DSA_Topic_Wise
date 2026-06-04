var addTwoNumbers = function (l1, l2) {
    let dummyNode = new ListNode(0);
    let curr = dummyNode;
    let sum = 0;
    let carr = 0;
    while (l1 || l2) {
        sum = carr;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carr = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }
    if (carr) curr.next = new ListNode(carr);
    return dummyNode.next;
};