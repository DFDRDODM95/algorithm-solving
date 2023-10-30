const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

console.log((Math.pow(inputData, 2) - inputData) / 2);
console.log(2);