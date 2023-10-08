const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, a, d] = inputData[0].split(' ').map(v => parseInt(v));
const arr = inputData[1].split(' ').slice(0, n).map(v => parseInt(v));

let nextTune = a;
let highest = 0;
for (let item of arr) {
    if (item === nextTune) {
        highest++;
        nextTune += d;
    }
}

console.log(highest);