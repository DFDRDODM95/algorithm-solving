const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
let board = inputData.slice(1, n + 1).map(str => str.split(' '));

let count = new Array(3).fill(0);

function func1(x, y, size) {
    if (size === 1) {
        if (board[x][y] === '-1') count[0]++;
        else if (board[x][y] === '0') count[1]++;
        else count[2]++;
        return;
    }

    let first = board[x][y];
    let same = true;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[x + i][y + j] !== first) {
                same = false;
                break;
            }
        }
    }
    if (same) {
        if (first === '-1') count[0]++;
        else if (first === '0') count[1]++;
        else count[2]++;
        return;
    }
    else {
        for (let i = 0; i < size; i += size / 3) {
            for (let j = 0; j < size; j += size / 3) {
                func1(i + x, j + y, size / 3);
            }
        }
    }
}
func1(0, 0, n);

count.forEach(v => console.log(v));