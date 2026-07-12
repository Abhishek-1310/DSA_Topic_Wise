// tc:- o(n) sc:-o(n)

// if we need to calculate the width of any level we do   width(any level):- (endIndex - startingIndex)+1
// cbt indexing:- left = 2*i+1  and right = 2*i+2

var widthOfBinaryTree = function (root) {
    if (!root) return 0;

    let q = [[root, 0]];
    let maxWidth = 0;

    while (q.length > 0) {
        let minIndex = q[0][1];
        let len = q.length;
        let low = 0, high = 0;
        for (let i = 0; i < len; i++) {
            let [node, ind] = q.shift();
            ind -= minIndex; // to normalize lvel index in sew tree without it it will fail
            if (i == 0) low = ind;
            if (i == len - 1) high = ind;
            if (node.left) {
                q.push([node.left, 2 * ind + 1]);
            }

            if (node.right) {
                q.push([node.right, 2 * ind + 2]);
            }
        }
        maxWidth = Math.max(maxWidth, high - low + 1);
    }
    return maxWidth;
};