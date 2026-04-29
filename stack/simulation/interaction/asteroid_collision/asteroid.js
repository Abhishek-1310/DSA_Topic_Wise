var asteroidCollision = function (asteroids) {
    let stack = [];
    let n = asteroids.length;
    for (let i = 0; i < n; i++) {
        let flag = true;
        while (stack.length > 0 && asteroids[i] < 0 && stack[stack.length - 1] > 0) {
            if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
                stack.pop();
            } else if (Math.abs(asteroids[i]) < Math.abs(stack[stack.length - 1])) {
                flag = false;
                break;
            } else {
                stack.pop();
                flag = false;
                break;
            }
        }
        if (flag) {
            stack.push(asteroids[i]);
        }
    }
    return stack;

};