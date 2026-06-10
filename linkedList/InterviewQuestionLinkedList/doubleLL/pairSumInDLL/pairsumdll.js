// nive solution tc:- o(n2)

class Solution {
    findPairsWithGivenSum(head, target) {
        // code here
        let result = [];
        let temp1 = head;
        while (temp1) {
            let temp2 = temp1.next;
            while (temp2) {
                if (temp1.data + temp2.data === target) result.push([temp1.data, temp2.data]);
                temp2 = temp2.next;
            }
            temp1 = temp1.next;
        }
        return result;
    }
}

// with help of two pointer tc:- o(n);

class Solution {
    findPairsWithGivenSum(head, target) {
        let result = [];
        let left = head;
        let right = head;
        while (right.next) {
            right = right.next;
        }
        while (left.data < right.data) {
            if (left.data + right.data === target) {
                result.push([left.data, right.data]);
                left = left.next;
                right = right.prev;
            } else if (left.data + right.data > target) {
                right = right.prev;
            } else {
                left = left.next;
            }
        }
        return result;
    }
}