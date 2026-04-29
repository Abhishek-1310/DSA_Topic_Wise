var removeKdigits = function (num, k) {
    let stack = [];
    for (let ch of num) {
        while (stack.length > 0 && stack[stack.length - 1] > ch && k > 0) {
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