const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = parseInt(input[0]);
const inputData = input[1].split(' ').slice(0, amount).map(v => parseInt(v));

let max = inputData[0];
for (let item of inputData) {
    if (item > max) max = item;
}

const answer = inputData.map( v => v / max * 100 ).reduce( (acc, v) => acc += v, 0 ) / inputData.length;

console.log(answer);