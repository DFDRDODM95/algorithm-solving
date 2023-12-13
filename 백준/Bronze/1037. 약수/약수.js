const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData[1].split(' ').slice(0, amount).map(v => parseInt(v)).sort( (a, b) => a - b );

let answer = -1;
if ( tc.length === 1 ) answer = tc[0] ** 2;
else answer = tc.at(0) * tc.at(-1);

console.log(answer);