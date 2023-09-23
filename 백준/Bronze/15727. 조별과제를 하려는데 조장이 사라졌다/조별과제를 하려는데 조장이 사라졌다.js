const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const inputData = BigInt(input);

const ceilAdder = inputData % 5n === 0n ? 0n : 1n;
const result = ( inputData / 5n ) + ceilAdder;
console.log(result.toString());