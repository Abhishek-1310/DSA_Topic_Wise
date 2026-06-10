// nive approch tc:- o(n) space:- o(n)
class Solution {
    cycleStart(head) {
        let temp = head;
        let map = new Map();
        while (temp) {
            if (map.has(temp)) return temp.data;

            map.set(temp, true);
            temp = temp.next;
        }
        return -1;

    }
}

// best approch tc:- 0(n) space:- o(1); 
//with slow and fast (when slow==fast) point slow to head and move
// both slow and fast by 1 when they meet that is your ans

class Solution {
    cycleStart(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                slow = head;
                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow.data;
            }

        }
        return -1;

    }
}