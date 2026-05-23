var evalRPN = function (tokens) {

    let stack = [];

    for (let i of tokens) {

        if (i !== "+" && i !== "-" && i !== "*" && i !== "/") {

            stack.push(Number(i));

        } else {

            let b = stack.pop();
            let a = stack.pop();

            let result = evaluate(a, b, i);

            stack.push(result);
        }
    }

    return stack[0];
};

function evaluate(a, b, op) {

    if (op === "+") return a + b;

    if (op === "-") return a - b;

    if (op === "*") return a * b;

    return Math.trunc(a / b);
}