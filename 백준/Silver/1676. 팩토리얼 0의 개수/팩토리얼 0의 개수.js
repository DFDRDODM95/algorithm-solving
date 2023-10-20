const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = BigInt(input);

let fact = 1n;
for (let i = 1n; i <= inputData; i++) {
    fact *= i;
}

let count = 0;
for (let item of [...fact.toString()].reverse()) {
    if (item === '0') count++;
    else break;
}

console.log(count);