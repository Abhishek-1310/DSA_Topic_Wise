var removeKdigits = function (num, k) {
    let stack = [];
    for (let ch of num) {
        while (stack.length > 0 && stack[stack.length - 1] > ch && k > 0) { // we will pop elem from stack if next element is greater
            stack.pop();
            k--;
        }
        stack.push(ch);
    }
    while (k > 0) { // string is in incresing order [1,2,3,4,5] nothing is popped from stack so remove k elemnt now
        stack.pop();
        k--;
    }
    while (stack.length > 0 && stack[0] === '0') { //removing leading zero 
        stack.shift();
    }
    return stack.length === 0 ? "0" : stack.join(""); //  return string not stack value and use "" 
};

// Clean trace of "10200", k=1:
// push '1' → ['1']
// push '0' → 0 < 1, pop '1' (k=0 now), push '0' → ['0']
// push '2' → 2 >= 0, push → ['0', '2']
// push '0' → k=0, no more removals, push → ['0', '2', '0']
// push '0' → push → ['0', '2', '0', '0']

// stack = ['0', '2', '0', '0']
// Without the leading zero removal, result = "0200" which is wrong. The while loop strips it: