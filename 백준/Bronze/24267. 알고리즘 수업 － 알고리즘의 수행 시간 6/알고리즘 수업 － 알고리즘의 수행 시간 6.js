const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = BigInt(input);
const k = inputData <= 2n ? 0n : inputData - 2n;

const powSum = ( k * (k + 1n) * (2n * k + 1n) ) / 6n;
const sum = ( k * (k + 1n) ) / 2n;

const answer = ( powSum + sum ) / 2n;
console.log(answer.toString());
console.log(3);