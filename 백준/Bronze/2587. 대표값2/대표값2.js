const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(v => parseInt(v));

const sum = inputData.reduce( (acc, v) => acc += v, 0 );
const avg = Math.trunc(sum / inputData.length);
const middle = inputData.sort( (a, b) => a - b).at(Math.trunc(inputData.length / 2));

console.log(avg);
console.log(middle);