// best sol t.c o(n) space o(1)
var isPalindrome = function (head) {
    // find middle
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse half linked list
    let curr = slow.next;
    let prev = null;
    while (curr) {
        let front = curr.next;
        curr.next = prev;
        prev = curr;
        curr = front;
    }
    // now check all value is palindrom or not 
    let temp = head;
    while (prev) {
        if (prev.val != temp.val) return false;
        prev = prev.next;
        temp = temp.next;
    }
    return true;

};

// space o(n) time o(n)
// with stack
var isPalindrome = function (head) {
    let stack = [];
    let temp = head;

    // Store all values
    while (temp) {
        stack.push(temp.val);
        temp = temp.next;
    }

    // Compare from start with stack top
    temp = head;

    while (temp) {
        if (temp.val !== stack.pop()) {
            return false;
        }
        temp = temp.next;
    }

    return true;
};