const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const arr = inputData.slice(1, amount + 1).map(v => parseInt(v));

const answer = arr.sort( (a, b) => a - b );
answer.forEach(v => console.log(v));