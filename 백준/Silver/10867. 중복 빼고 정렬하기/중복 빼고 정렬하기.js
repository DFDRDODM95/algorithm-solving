const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData[1].split(' ').slice(0, amount).map(v => parseInt(v));

let obj = {};
for (let item of tc) {
    if (!obj[item]) {
        obj[item] = 1;
    }
}
const answer = Object.keys(obj).sort( (a, b) => a - b ).join(' ');
console.log(answer);