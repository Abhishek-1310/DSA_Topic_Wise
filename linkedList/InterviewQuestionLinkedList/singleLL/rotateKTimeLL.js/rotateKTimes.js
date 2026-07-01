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
