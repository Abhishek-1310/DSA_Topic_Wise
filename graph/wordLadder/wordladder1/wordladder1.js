//N = number of words in wordList
// L = length of each word
// tc:- o(n*l*26):- o(n*l) sc:-o(n+l) sc:- o(n)
var ladderLength = function (beginWord, endWord, wordList) {
    let set = new Set();
    for (let i = 0; i < wordList.length; i++) {
        set.add(wordList[i]);
    }
    let queue = [[beginWord, 1]];
    while (queue.length) {
        let [word, step] = queue.shift();
        if (word == endWord) return step;
        for (let i = 0; i < word.length; i++) {

            for (let code = 97; code <= 122; code++) {
                let ch = String.fromCharCode(code);
                if (ch == word[i]) continue;
                let arr = word.split('');
                arr[i] = ch;
                let newword = arr.join('');
                if (set.has(newword)) {
                    set.delete(newword);
                    queue.push([newword, step + 1])
                }
            }
        }
    }
    return 0;
};

// easy way
function ladderLength(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if (!set.has(endWord)) return 0; // Optimization: Early exit if endWord is missing

    // Queue stores pairs: [current_word, current_step_count]
    let queue = [[beginWord, 1]];

    while (queue.length) {
        let [word, step] = queue.shift();

        if (word === endWord) return step; // Found the shortest path

        // Split outside the loop to avoid recreating the array 26 times per letter
        let arr = word.split(''); 

        for (let i = 0; i < word.length; i++) {
            let originalChar = arr[i]; // Remember original character to reset later

            for (let code = 97; code <= 122; code++) {
                let ch = String.fromCharCode(code);
                if (ch === originalChar) continue;

                arr[i] = ch;
                let newword = arr.join('');

                if (set.has(newword)) {
                    set.delete(newword); // Mark as visited so we don't process it again
                    queue.push([newword, step + 1]);
                }
            }
            arr[i] = originalChar; // Reset character back to normal for the next index loop
        }
    }
    return 0; // No path found
}
