const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m, k] = inputData[0].split(' ').map(v => parseInt(v));

let tc = [];
let rest = inputData.slice(1);
for (let i = 0; i < k; i++) {
    const [r, c] = rest[0].split(' ').map(v => parseInt(v));
    const temp = rest.slice(1, r + 1).map(str => str.split(' ').map(item => parseInt(item)) );
    tc.push(temp);
    rest = rest.slice(r + 1);
}

let board = new Array(n).fill(0).map(v => new Array(m).fill(0));
let isFetched = new Array(tc.length).fill(0);

for (let [key, item] of tc.entries()) {
    const rt1 = getRotation(item);
    const rt2 = getRotation(rt1);
    const rt3 = getRotation(rt2);

    let arr = [item, rt1, rt2, rt3];

    for (let k = 0; k < 4 && !isFetched[key]; k++) {
        for (let i = 0; i < board.length && !isFetched[key]; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (fetchable(i, j, arr[k])) {
                    fetching(i, j, arr[k]);
                    isFetched[key] = 1;
                    break;
                }
            }
        }
    }

    function getRotation(orj) {
        let rotated = new Array(orj[0].length).fill(0).map(v => new Array(orj.length));
        for (let i = 0; i < rotated.length; i++) {
            for (let j = 0; j < rotated[0].length; j++) {
                rotated[i][j] = orj[rotated[0].length - j - 1][i];
            }
        }
        return rotated;
    }

    function fetchable(startY, startX, pic) {
        const [w, h] = [pic[0].length, pic.length];
        if (startY + h > board.length || startX + w > board[0].length) return false;
        for (let i = 0; i < pic.length; i++) {
            for (let j = 0; j < pic[0].length; j++) {
                if (board[ startY + i ][ startX + j] * pic[i][j] === 1) return false;
            }
        }
        return true;
    }
    function fetching(startY, startX, pic) {
        for (let i = 0; i < pic.length; i++) {
            for (let j = 0; j < pic[0].length; j++) {
                board[ startY + i ][ startX + j ] += pic[i][j];
            }
        }
    }
}

let answer = 0;
for (let item of board) {
    for (let value of item) {
        if (value === 1) answer++;
    }
}

console.log(answer);