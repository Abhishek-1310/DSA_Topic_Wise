// best approch tc:- o(n) space o(1);

var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0);
    let temp = head;
    let lastGrouptail = dummy;
    while (temp) {
        let groupkthnode = kSplit(temp, k);
        if (!groupkthnode) {
            lastGrouptail.next = temp;
            break;
        }

        let nextGroupStart = groupkthnode.next;
        groupkthnode.next = null;
        lastGrouptail.next = reverse(temp);

        lastGrouptail = temp;
        temp = nextGroupStart;
    }
    return dummy.next;
};
function kSplit(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}
function reverse(head) {
    let temp = head;
    let prev = null;
    let front = null;
    while (temp) {
        front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}