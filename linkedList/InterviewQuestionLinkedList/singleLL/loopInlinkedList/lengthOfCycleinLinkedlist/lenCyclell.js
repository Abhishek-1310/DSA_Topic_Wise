// nive solution tc:- O(n) and space:- o(1);
class Solution {
    lengthOfLoop(head) {
        // code here
        let temp = head;
        let map = new Map();
        let pos = 1;
        while (temp) {
            if (map.has(temp)) return pos - map.get(temp);

            map.set(temp, pos);
            pos++;
            temp = temp.next;
        }
        return 0;
    }
}
// effective solution:- tc:- o(n)+o(k) space complexity:- o(1) with help of slow and fast pointer

class Solution {
    lengthOfLoop(head) {
        // code here
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                let count = 1;
                fast = fast.next;
                while (fast != slow) {
                    count++;
                    fast = fast.next;
                }
                return count;
            }
        }
        return 0;

    }
}