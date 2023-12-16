const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = parseInt(input);

let board = new Array(n).fill(0).map(v => new Array(n).fill('*'));

function func1(x, y, size) {
    if (size === 1) {
        return;
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i > size / 3 - 1 && i < size / 3 * 2 ) {
                if (j > size / 3 - 1 && j < size / 3 * 2 ) { 
                    board[x + i][y + j] = ' '; 
                }
            } 
            if (i % (size / 3) === 0 && j % (size / 3) === 0) func1(x + i, y + j, size / 3);
        }
    }
}
func1(0, 0, n);

const answer = board.map(v => v.join('')).join('\n');
console.log(answer);