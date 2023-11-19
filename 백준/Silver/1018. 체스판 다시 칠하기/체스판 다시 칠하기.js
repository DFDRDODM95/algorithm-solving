const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = inputData[0].split(' ').map(v => parseInt(v));
const tc = inputData.slice(1, 1 + n).map(v => v.slice(0, m));

let arr = [];
for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
        let temp = tc.slice(i, i + 8).map(v => v.slice(j, j + 8));
        arr.push(temp);
    }
}

let min = 32;
for (let item of arr) {
    let [aCount, bCount] = [0, 0];
    for(let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let correctA = (i + j) % 2 === 0 ? 'W' : 'B';
            let correctB = (i + j) % 2 === 0 ? 'B' : 'W';
            if (item[i][j] != correctA) aCount++;
            if (item[i][j] != correctB) bCount++;
        }
    }
    if (aCount < min) min = aCount;
    if (bCount < min) min = bCount;
}

console.log(min);