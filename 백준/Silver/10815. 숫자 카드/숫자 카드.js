const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const arr = inputData[1].split(' ').map(v => BigInt(v));
const m = parseInt(inputData[2]);
const tc = inputData[3].split(' ').map(v => BigInt(v));

let map1 = new Map();
for (let item of arr) {
    map1.set(item, 1);
}

let answer = ``;
for (let item of tc) {
    answer += map1.has(item) ? '1 ' : '0 ';
}
console.log(answer);