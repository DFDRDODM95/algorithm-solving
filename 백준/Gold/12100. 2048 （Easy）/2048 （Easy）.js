const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const board = inputData.slice(1, n + 1).map(str => str.split(' ').map(item => parseInt(item)) );

let board1 = board.map(v => v.slice());

function tilt(dir) {
    if (dir === 0) {
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
    else if (dir === 1) {
        for (let i = 0; i < n; i++) {
            let tilted = new Array(n).fill(0);
            let idx = 0;
            for (let j = n - 1; j >= 0; j--) {
                if (board1[i][j] === 0) continue;
                if (tilted[idx] === 0)
                    tilted[idx] = board1[i][j];
                else if (tilted[idx] === board1[i][j])
                    tilted[idx++] *= 2;
                else
                    tilted[++idx] = board1[i][j];
            }
            for (let j = 0; j < n; j++) board1[i][n - 1 - j] = tilted[j];
        }
    }
    else if (dir === 2) {
        for (let j = 0; j < n; j++) {
            let tilted = new Array(n).fill(0);
            let idx = 0;
            for (let i = 0; i < n; i++) {
                if (board1[i][j] === 0) continue;
                if (tilted[idx] === 0)
                    tilted[idx] = board1[i][j];
                else if (tilted[idx] === board1[i][j])
                    tilted[idx++] *= 2;
                else
                    tilted[++idx] = board1[i][j];
            }
            for (let i = 0; i < n; i++) board1[i][j] = tilted[i];
        }
    }
    else if (dir === 3) {
        for (let j = 0; j < n; j++) {
            let tilted = new Array(n).fill(0);
            let idx = 0;
            for (let i = n - 1; i >= 0; i--) {
                if (board1[i][j] === 0) continue;
                if (tilted[idx] === 0)
                    tilted[idx] = board1[i][j];
                else if (tilted[idx] === board1[i][j])
                    tilted[idx++] *= 2;
                else
                    tilted[++idx] = board1[i][j];
            }
            for (let i = 0; i < n; i++) board1[n - 1 - i][j] = tilted[i];
        }
    }
}

let max = 0;
for (let tmp = 0; tmp < 1024; tmp++) {
    board1 = board.map(v => v.slice());
    let brute = tmp;
    for (let i = 0; i < 5; i++) {
        let dir = Math.floor(brute % 4);
        brute /= 4;
        tilt(dir);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
        max = max > board1[i][j] ? max : board1[i][j];
    }
}

console.log(max);