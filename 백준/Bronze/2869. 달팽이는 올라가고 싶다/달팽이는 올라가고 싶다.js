const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
const [a, b, v] = input.map( v => BigInt(v) );

const cp = v - a; // critical point
const step = a - b;
debugger;

let answer = -1;
if (cp % step === 0n) {
    answer = cp / step + 1n;
}
else {
    answer = cp / step + 2n;
}

console.log(answer.toString());