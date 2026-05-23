var makeGood = function (s) {
    let stack = [];

    for (let c of s) {
        let top = stack[stack.length - 1];
        if (stack.length && top !== c && top.toLowerCase() === c.toLowerCase()) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};