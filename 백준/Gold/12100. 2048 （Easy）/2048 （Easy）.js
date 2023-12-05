const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const board = inputData.slice(1, n + 1).map(str => str.split(' ').map(item => parseInt(item)) );

let board1 = board.map(v => v.slice());
function rotate() {
    let temp = board1.map(v => v.slice());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board1[i][j] = temp[n - 1 - j][i];
        }
    }
}

function tilt(dir) {
    while (dir-- > 0) rotate();
    for (let i = 0; i < n; i++) {
        let tilted = new Array(n).fill(0);
        let idx = 0;
        for (let j = 0; j < n; j++) {
            if (board1[i][j] === 0) continue;
            if (tilted[idx] === 0)
                tilted[idx] = board1[i][j];
            else if (tilted[idx] === board1[i][j])
                tilted[idx++] *= 2;
            else
                tilted[++idx] = board1[i][j];
        }
    for (let j = 0; j < n; j++) board1[i][j] = tilted[j];
    }
}

let max = 0;
for (let tmp = 0; tmp < 1024; tmp++) {
    board1 = board.map(v => v.slice());
    let brute = tmp;
    for (let i = 0; i < 5; i++) {
        let dir = brute % 4;
        brute /= 4;
        tilt(dir);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
        max = max > board1[i][j] ? max : board1[i][j];
    }
}

console.log(max);