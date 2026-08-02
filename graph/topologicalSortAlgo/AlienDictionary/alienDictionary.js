// Time Complexity: O(N × L(check all char in string array) + K + E(khan's algo)), where: (n*l+k+e)

// N = number of words
// L = average word length (for comparing adjacent words)
// K = number of distinct characters
// E = number of precedence edges

// Space Complexity: O(K + E).

class Solution {
    findOrder(words) {

        let set = new Set();
        // to find all unique element; u will get K
        for (let word of words) {
            for (let char of word) {
                set.add(char);
            }
        }
        let k = set.size;

        // to track all char and there number you can't do topo on char need to change to number
        let ind = 0;
        let map = new Map();
        let rev = []; // need this when we convert number to char
        for (let char of set) {
            map.set(char, ind); // need when we convert char to numver 
            rev[ind++] = char;
        }

        let n = words.length;
        let adjA = Array.from({ length: k }, () => []); // alien adjencent array
        let found = false;
        for (let i = 0; i < n - 1; i++) {
            let s1 = words[i];
            let s2 = words[i + 1];
            let min = Math.min(s1.length, s2.length);
            for (let j = 0; j < min; j++) {
                if (s1[j] != s2[j]) {
                    found = true;
                    adjA[map.get(s1[j])].push(map.get(s2[j]));
                    break;
                }
            }
            if (!found && s1.length > s2.length) {
                return "";
            }
        }

        // topo sort
        let indegree = new Array(k).fill(0);
        for (let i = 0; i < k; i++) {
            for (let neigh of adjA[i]) {
                indegree[neigh]++;
            }

        }
        let queue = [];
        for (let i = 0; i < k; i++) {
            if (indegree[i] == 0) {
                queue.push(i);
            }
        }
        let topo = [];
        while (queue.length) {
            let node = queue.shift();
            topo.push(node);
            for (let neigh of adjA[node]) {
                indegree[neigh]--;
                if (indegree[neigh] == 0) {
                    queue.push(neigh);
                }
            }
        }

        // convert top order ro string.
        let ans = "";
        for (let node of topo) {
            ans += rev[node];
        }

        return topo.length == k ? ans : "";
    }
}