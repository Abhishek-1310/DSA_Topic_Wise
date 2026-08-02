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

// other way
while (queue.length) {
    let [word, step] = queue.shift();
    if (word == endWord) return step;
    for (let i = 0; i < word.length; i++) {
        let arr = word.split('');
        for (let code = 97; code <= 122; code++) {
            let ch = String.fromCharCode(code);
            if (ch == word[i]) continue;
            arr[i] = ch;
            let newword = arr.join('');
            if (set.has(newword)) {
                set.delete(newword);
                queue.push([newword, step + 1])
            }
        }
        arr[i] = word[i];
    }
}

// way
var ladderLength = function (beginWord, endWord, wordList) {
    let st = new Set();
    for (let it of wordList) {
        st.add(it);
    }
    if (!st.has(endWord)) return 0;
    const q = [];
    let count = 0;
    q.push(beginWord);
    while (q.length > 0) {
        let len = q.length;
        for (let k = 0; k < len; k++) {
            let node = q.shift();
            for (let i = 0; i < node.length; i++) {
                for (let j = 0; j < 26; j++) {
                    let ch = String.fromCharCode(97 + j);
                    let temp = node.slice(0, i) + ch + node.slice(i + 1);
                    if (st.has(temp)) {
                        q.push(temp);
                        st.delete(temp);
                    }
                    if (node == endWord) return count + 1;
                }
            }
        }
        count++;
    }
    return 0;
};