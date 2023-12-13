const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

let laser = [];
let board = [...input].slice();
for (let i = 1; i <= board.length; i++) {
    if (input[i] === ')') {
        if (input[i - 1] === '(') {
            laser.push([i - 1, i]);
            board[i - 1] = '.';
            board[i] = '.';
        }
    }
}

let stick = [];
let stk = [];
for (let i = 0; i < board.length; i++) {
    if (board[i] === '.') continue;
    else if (board[i] === '(') stk.push([board[i], i]);
    else if (board[i] === ')') {
        if (stk.at(-1)[0] === '(') {
            let start = stk.pop()[1];
            let end = i;
            stick.push([start, end]);
        }
    }
}

let count = 0;
for (let i = 0; i < stick.length; i++) {
    let cut = 0;
    for (let j = 0; j < laser.length; j++) {
        if (stick[i][0] < laser[j][0] && stick[i][1] > laser[j][1]) cut++;
    }
    count += cut + 1;
}

console.log(count);