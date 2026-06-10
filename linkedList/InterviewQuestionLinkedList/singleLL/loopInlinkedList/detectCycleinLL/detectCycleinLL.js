// nive solution O(n) space:- o(n)

var hasCycle = function (head) {
    let temp = head;
    let map = new Map();

    while (temp) {
        if (map.get(temp)) return true;
        map.set(temp, true);
        temp = temp.next;
    }
    return false;
};

// if you want to do without extra space so with slow and fast pointer move both slow and fast pointer 
// if they meet at any point return true means there is loop:
// tc:- o(n)
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) { // why fats && fast.next 1->2->null when we check only (fast.next) when we do
        slow = slow.next; // fast =fast.next.next it is null so in next loop it will chcek null.next which is not possible 
        fast = fast.next.next; // imp when you do fast =fast.next.next check both (fast && fast.next)
        if (slow === fast) return true;
    }
    return false;
};