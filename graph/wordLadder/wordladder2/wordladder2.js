// not optimal
// For this queue-of-paths approach:

// Time Complexity: O(P × N) (or more precisely O(P × (L + N))), where P is the number of paths explored.
// Space Complexity: O(P × N).

// P can be exponential in the worst case, which is why this approach doesn't scale well.
var findLadders = function (beginWord, endWord, wordList) {
    let set = new Set(wordList);
    if (!set.has(endWord)) return [];
    let queue = [[beginWord]];
    let ans = [];

    while (queue.length) {
        let usedOnlevel = new Set();
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let path = queue.shift();
            let lword = path[path.length - 1];//We must generate neighbors of the current word, which is always the last word in the path.
            if (lword == endWord) {
                if (!ans.length) { // The first path is guaranteed to be the shortest because BFS explores paths level by level.
                    ans.push(path);
                } else if (path.length == ans[0].length) {
                    ans.push(path);
                } // if one path is already is in ans then compare with 2nd path it should not exceed to length  
            }
            if (ans.length && path.length >= ans[0].length) continue;
            for (let i = 0; i < lword.length; i++) {
                for (let j = 97; j <= 122; j++) {
                    let ch = String.fromCharCode(j);
                    if (ch == lword[i]) continue;
                    let arr = lword.split('');
                    arr[i] = ch;
                    let newWord = arr.join('');
                    if (set.has(newWord)) {
                        let newpath = [...path];
                        newpath.push(newWord);
                        queue.push(newpath);
                        usedOnlevel.add(newWord);
                    }
                    // delete newword from set Instead, we need to delete after the whole BFS level finishes.
                }
            }
        }
        for (let word of usedOnlevel) {
            set.delete(word);
        }
    }
    return ans;
};