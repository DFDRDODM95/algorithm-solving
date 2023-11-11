const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(v => parseInt(v));

const [a, b] = inputData;

console.log(a * b);