// best answer

class Solution {
    rowWithMax1s(arr) {
        // code here
        let row = arr.length;
        let col = arr[0].length;
        let index = 0;
        let i = 0, l = col - 1;
        while (i < row && l >= 0) {
            if (arr[i][l] === 1) {
                index = i;
                l--;
            } else {
                i++;
            }
        }
        return index;
    }
}


class Solution {
    rowWithMax1s(arr) {
        // code here
        let col = arr[0].length;
        let row = arr.length;
        let MaxCount = 0;
        let index = -1;
        for (let i = 0; i < row; i++) {
            let l = 0;
            let r = col - 1;
            let foccur = -1;
            while (l <= r) {
                let mid = Math.floor((l + r) / 2);
                if (arr[i][mid] === 1) {
                    foccur = mid;
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
            let count = foccur === -1 ? 0 : col - foccur;
            if (MaxCount < count) {
                MaxCount = count;
                index = i;
            }
        }
        return index;
    }
}