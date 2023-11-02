const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [amount, k] = inputData[0].split(' ').map(v => parseInt(v));
const tc = inputData[1].split(' ').slice(0, amount).map(v => parseInt(v));

const answer = tc.sort( (a, b) => b - a ).at(k - 1);
console.log(answer);