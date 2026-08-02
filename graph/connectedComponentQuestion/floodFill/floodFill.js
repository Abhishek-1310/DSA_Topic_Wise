//tc:-o(v+e) sc:- o(1)
var floodFill = function (image, sr, sc, color) {
    const dr = [1, -1, 0, 0];
    const dc = [0, 0, 1, -1];
    const row = image.length;
    const col = image[0].length;
    const OriginalColor = image[sr][sc];
    if (OriginalColor === color) return image;
    function dfs(r, c) {
        image[r][c] = color;
        for (let i = 0; i < 4; i++) {
            let newR = r + dr[i];
            let newC = c + dc[i];
            if (newR >= 0 && newR < row && newC >= 0 && newC < col) {
                if (image[newR][newC] == OriginalColor) {
                    dfs(newR, newC);
                }
            }
        }
    }
    dfs(sr, sc);
    return image;
};