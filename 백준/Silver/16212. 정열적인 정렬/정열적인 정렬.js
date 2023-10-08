const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const arr = inputData[1].split(' ').slice(0, amount).map(v => parseInt(v));

const answer = arr.sort( (a, b) => a - b ).join(' ');
console.log(answer);