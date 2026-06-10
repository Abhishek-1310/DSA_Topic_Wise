//N = total number of nodes K = number of linked lists Work per level = O(N) Levels = O(log K)
// tc: O(N log K) space:- O(N log K)  
// explain how tc:- Again, all nodes are involved exactly once. n and Each round halves the number of lists: so log k = nlogk
var mergeKLists = function (lists) {
    if (lists.length == 0) return null;

    while (lists.length > 1) {
        let merged = []
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            merged.push(merge2ll(l1, l2));
        }
        lists = merged;
    }
    return lists[0];
};
function merge2ll(l1, l2) {

    let dummy = new ListNode(0);
    let temp = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    temp.next = l1 || l2;
    return dummy.next;
}