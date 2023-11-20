const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split(' ').map(v => BigInt(v));

let [a, b] = inputData;
let ab = a * b;
let r = a % b;

for(; r = a % b; a = b, b = r) {}

console.log((ab / b).toString());