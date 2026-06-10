// nive solution
// tc:- O(n+m) an space :- o(n)
var getIntersectionNode = function (headA, headB) {
    let map = new Map();
    let l1 = headA;
    while (l1) {
        map.set(l1, true); // we have to store node not value becuse val can repeat but that might not be inetrsection
        l1 = l1.next; // 1-3-4-5-6  0-1-2-9-4-5-6  here interacion is 4 but 1 comes two time that is not intersaction
    }
    let l2 = headB;
    while (l2) {
        if (map.get(l2)) {
            return l2;
        }
        l2 = l2.next;
    }
    return null;
};

// best approch is point t1 and t2 to head1 and head2 and move when t1 reach to null point to head2 if t2 reach
// null point to head1 after two changes both t1 and t2 will come at same level then go one by one and check
// when val matches return that node 
// tc :- O(M+N) space:- o(1)
var getIntersectionNode = function (headA, headB) {
    let h1 = headA, h2 = headB;
    while (h1 || h2) {
        if (!h1) {
            h1 = headB;
        }
        if (!h2) {
            h2 = headA;
        }
        if (h1 == h2) return h1;
        h1 = h1.next;
        h2 = h2.next;
    }
    return null;
};