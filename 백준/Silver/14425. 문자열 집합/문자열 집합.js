const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = inputData[0].split(' ').map(v => parseInt(v));
const s = inputData.slice(1, n + 1);
const tc = inputData.slice(n + 1);

const sMap = new Map();
for (let item of s) {
    sMap.set(item, 1);
}

let answer = 0;
for (let item of tc) {
    if (sMap.has(item)) answer++;
}
console.log(answer);