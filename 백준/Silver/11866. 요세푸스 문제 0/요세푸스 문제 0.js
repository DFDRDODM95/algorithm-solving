const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split(' ').map(v => parseInt(v));
const [n, k] = inputData;

const arr = new Array(n).fill(1).map( (v, idx) => v + idx );
let picked = new Array(n).fill(-1);

let last = 0;
let count = 0;
for (let i = 0; picked.at(-1) === -1; i++) {
    if (picked.includes(arr[i % n]) === false) count++;
    if (count === k) {
        picked[last] = arr[i % n];
        count = 0;
        last++;
    }
}

console.log('<' + picked.join(", ") + '>');