const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
let board = inputData.slice(1, n + 1).map(str => str.split(''));

let rst = '';
function func1(x, y, size) {
    if (size === 1) {
        rst += board[x][y] === '1' ? '1' : '0';
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
        rst += first === '1' ? '1' : '0';
        return;
    }
    else {
        for (let i = 0; i < size; i += size / 2) {
            for (let j = 0; j < size; j += size / 2) {
                if (i + j === 0) rst += '(';
                func1(i + x, j + y, size / 2);
                if (i + j === size) rst += ')';
            }
        }
    }
}
func1(0, 0, n);

console.log(rst);