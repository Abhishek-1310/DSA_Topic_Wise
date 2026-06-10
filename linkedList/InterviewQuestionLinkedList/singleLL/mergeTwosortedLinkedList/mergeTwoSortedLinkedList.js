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

