const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData[1].split(' ').slice(0, n).map(v => parseInt(v));
const x = parseInt(inputData[2]);

let arr = new Array(100001).fill(0);
let count = 0;
for (let i = 0; i < n; i++) {
    if (arr[x - tc[i]] === 1) count++;
    arr[tc[i]] = 1;
}

console.log(count);