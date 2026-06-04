// nive solution

var reverseList = function (head) {
    let stack = [];
    let temp = head;
    while (temp != null) {
        stack.push(temp.val);
        temp = temp.next;
    }
    temp = head;
    while (temp != null) {
        temp.val = stack.pop();
        temp = temp.next;
    }
    return head;
};

// best solution
var reverseList = function (head) {
    let front = null;
    let prev = null;
    let temp = head;
    while (temp != null) {
        front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev; //why at last when front and temp went to null only prev is at last index so return that
    // that is new head
};