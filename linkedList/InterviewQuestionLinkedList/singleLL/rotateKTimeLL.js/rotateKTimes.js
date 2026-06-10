// O(n) + O(n) + O(1)
// = O(2n)
// = O(n)

var rotateRight = function (head, k) {
    if (!head || !head.next || !k) return head;

    let tail = head;
    let len = 1;
    while (tail.next) {
        tail = tail.next;
        len++;
    }
    k = k % len;
    if (!k) return head;

    tail.next = head;

    let times = len - k - 1;
    let temp = head;
    while (times > 0) {
        temp = temp.next;
        times--;
    }
    let newHead = temp.next;
    temp.next = null;


    return newHead;
};

// best approch Time  : O(n + m) Space : O(1)

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let temp = dummy;
    let t1 = list1;
    let t2 = list2;
    while (t1 && t2) {
        if (t1.val < t2.val) {
            temp.next = t1;
            temp = temp.next;
            t1 = t1.next;
        } else {
            temp.next = t2;
            temp = temp.next;
            t2 = t2.next;
        }
    }
    if (t2) {
        temp.next = t2;
    } else {
        temp.next = t1;
    }
    return dummy.next;
};