class Solution {
    ratInMaze(maze) {
        let result = [];
        let n = maze.length
        let visited = Array.from({ length: n }, () => new Array(n).fill(false));

        function backtrack(i, j, ans) {
            if (i === n - 1 && j === n - 1) {
                result.push(ans);
                return;
            }
            visited[i][j] = true;
            //down
            if (i + 1 < n && maze[i + 1][j] == 1 && !visited[i + 1][j]) {
                backtrack(i + 1, j, ans + "D");
            }
            //left
            if (j - 1 >= 0 && maze[i][j - 1] == 1 && !visited[i][j - 1]) {
                backtrack(i, j - 1, ans + "L");
            }
            //right
            if (j + 1 < n && maze[i][j + 1] == 1 && !visited[i][j + 1]) {
                backtrack(i, j + 1, ans + "R");
            }
            //up
            if (i - 1 >= 0 && maze[i - 1][j] == 1 && !visited[i - 1][j]) {
                backtrack(i - 1, j, ans + "U");
            }

            visited[i][j] = false;
        }
        if (maze[0][0] === 1) {
            backtrack(0, 0, "");
        }

        return result;

    }
}