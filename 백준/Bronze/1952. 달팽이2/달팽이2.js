const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
const [m, n] = input.map(v => parseInt(v));
const size = m * n;

let board = new Array(m).fill(0).map(v => 'x'.repeat(n).split(''));
let curve = 0;

let [iAdder, jAdder] = [0, 1];
function turn (c) {
    let dir = c % 4;

    if (dir === 0) {
        return [1, 0];
    }
    else if (dir === 1) {
        return [0, -1];
    }
    else if (dir === 2) {
        return [-1, 0];
    }
    else {
        return [0, 1];
    }
}

let [i, j] = [0, 0];
let passed = 0;
while (passed < size) {
    if (i >= m || j >= n || i < 0 || j < 0 ) {
        i -= iAdder;
        j -= jAdder;
        [iAdder, jAdder] = turn(curve);
        curve++;
        i += iAdder;
        j += jAdder;
    }
    else if (board[i][j] === 'o') {
        i -= iAdder;
        j -= jAdder;
        [iAdder, jAdder] = turn(curve);
        curve++;
        i += iAdder;
        j += jAdder;
    }
    board[i][j] = 'o';
    i += iAdder;
    j += jAdder;
    passed++;
}
console.log(curve);