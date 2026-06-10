var copyRandomList = function (head) {
    if (!head) return null;
    let map = new Map();
    let temp = head;
    while (temp) {
        let node = new _Node(temp.val);
        map.set(temp, node);
        temp = temp.next;
    }
    temp = head;
    while (temp) {
        let copy = map.get(temp);
        copy.next = temp.next ? map.get(temp.next) : null;
        copy.random = temp.random ? map.get(temp.random) : null;
        temp = temp.next;
    }
    return map.get(head);
};