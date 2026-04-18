var solveSudoku = function (board) {

    // make col, row,box array which contain set like [set(),set().....9] which store elemnt 
    // why we are creating this so we can check if this value is present in col, row and grid we should not put value need to skip
    let col = Array.from({ length: 9 }, () => new Set());
    let row = Array.from({ length: 9 }, () => new Set());
    let box = Array.from({ length: 9 }, () => new Set());

    // take out all elemnt from board and put in row, col, box;
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] !== '.') {
                //this formula need to find boxid in which grid it is total 9 grid it will find out one point lie where 0,0 lie in 0
                boxid = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                val = board[r][c];
                col[c].add(val);
                row[r].add(val);
                box[boxid].add(val);
            }

        }
    }                                            //  here
    function backtrack(r, c) {      // [. . . . . . . .]                                                               
        // when you reached at the end of the column you need to jump in next row with 0 column
        if (c == 9) return backtrack(r + 1, 0);
        // when all row completed then you have to return board just return true; you need to end the recursion now
        if (r == 9) return true;
        //when current position is already filled with some value go to next column
        if (board[r][c] !== '.') return backtrack(r, c + 1);

        let boxid = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        for (let i = 1; i <= 9; i++) {
            // set store string
            let val = i.toString();

            // skip if val present in row, present in col, present in grid with continue
            if (row[r].has(val) || col[c].has(val) || box[boxid].has(val)) continue;

            //if value is safe then put in board then add in row, col, box
            board[r][c] = val;
            row[r].add(val);
            col[c].add(val);
            box[boxid].add(val);
            // current postion filled with value move to next column
            if (backtrack(r, c + 1)) return true;
            // when you remove the value delete value and replace board with '.'
            board[r][c] = '.';
            row[r].delete(val);
            col[c].delete(val);
            box[boxid].delete(val);
        }
        return false;
    }
    backtrack(0, 0);
    return board;
};