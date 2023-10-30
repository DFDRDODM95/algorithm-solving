const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(v => parseInt(v));

console.log(Math.pow(inputData[0], 2));
console.log(2);