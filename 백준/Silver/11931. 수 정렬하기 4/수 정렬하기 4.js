const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(v => parseInt(v));

const answer = tc.sort( (a, b) => b - a );
console.log(answer.join('\n'));