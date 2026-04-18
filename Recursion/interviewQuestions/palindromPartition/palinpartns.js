var partition = function (s) {
    let result = [];
    function palindrom(part) {
        let st = 0, ed = part.length - 1;
        while (st < ed) {
            if (part[st] !== part[ed]) {
                return false;
            }
            st++;
            ed--;
        }
        return true;
    }
    function backtrack(s, part) {
        if (s.length === 0) {
            result.push([...part]);
            return;
        }

        for (let i = 0; i < s.length; i++) {
            let prefix = s.substring(0, i + 1);
            if (!palindrom(prefix)) continue;
            part.push(prefix);
            backtrack(s.substring(i + 1), part);
            part.pop();
        }
    }
    backtrack(s, []);
    return result;
};