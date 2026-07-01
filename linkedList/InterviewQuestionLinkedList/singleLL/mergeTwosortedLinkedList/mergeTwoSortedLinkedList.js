// nive solution  Total = O((n+m) log(n+m))
//Total space  = O(n+m)

var mergeTwoLists = function (list1, list2) {
    let arr = [];

    while (list1) {
        arr.push(list1.val);
        list1 = list1.next;
    }

    while (list2) {
        arr.push(list2.val);
        list2 = list2.next;
    }

    arr.sort((a, b) => a - b);

    let dummy = new ListNode(-1);
    let curr = dummy;

    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }

    return dummy.next;
};


// best solution
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

