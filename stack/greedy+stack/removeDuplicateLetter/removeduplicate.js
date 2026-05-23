let freq = new Map();

for (let ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
}

let stack = [];
let visited = new Set();

for (let ch of s) {

    freq.set(ch, freq.get(ch) - 1);

    if (visited.has(ch)) continue;

    while (
        stack.length &&
        stack[stack.length - 1] > ch &&
        freq.get(stack[stack.length - 1]) > 0
    ) {
        visited.delete(stack.pop());
    }

    stack.push(ch);
    visited.add(ch);
}

return stack.join("");