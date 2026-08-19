// Time Complexity: O(N × L(check all char in string array) + K + E(khan's algo)), where: (n*l+k+e)

// N = number of words
// L = average word length (for comparing adjacent words)
// K = number of distinct characters
// E = number of precedence edges

// Space Complexity: O(K + E).


function alienOrder(words) {
    // Step 1: Initialize graph and indegree map for all unique characters
    const graph = new Map();
    const indegree = new Map();
    
    for (const word of words) {
        for (const char of word) {
            if (!graph.has(char)) graph.set(char, new Set());
            if (!indegree.has(char)) indegree.set(char, 0);
        }
    }
    
    // Step 2: Build the graph by comparing adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        
        // Check for invalid prefix case (e.g., "abc" comes before "ab")
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return "";
        }
        
        // Find the first mismatching character
        const minLength = Math.min(word1.length, word2.length);
        for (let j = 0; j < minLength; j++) {
            const char1 = word1[j];
            const char2 = word2[j];
            
            if (char1 !== char2) {
                // If this relation is new, update graph and indegree
                if (!graph.get(char1).has(char2)) {
                    graph.get(char1).add(char2);
                    indegree.set(char2, indegree.get(char2) + 1);
                }
                break; // Only the first difference determines the order
            }
        }
    }
    
    // Step 3: Add all characters with 0 indegree to the queue
    const queue = [];
    for (const [char, count] of indegree.entries()) {
        if (count === 0) {
            queue.push(char);
        }
    }
    
    // Step 4: Process the queue (Standard BFS Topological Sort)
    let result = "";
    while (queue.length > 0) {
        const current = queue.shift();
        result += current;
        
        // Decrease indegree for all neighbors
        for (const neighbor of graph.get(current)) {
            indegree.set(neighbor, indegree.get(neighbor) - 1);
            
            // If indegree becomes 0, add to queue
            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // Step 5: If result doesn't contain all unique characters, a cycle exists
    return result.length === indegree.size ? result : "";
}

// Example usage:
console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"])); // Output: "wertf"




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
