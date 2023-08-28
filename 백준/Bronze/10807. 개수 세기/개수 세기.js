const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const amount = parseInt(inputData[0]);
const list = inputData[1]
    .split(" ")
    .map((v) => parseInt(v))
    .slice(0, amount);
const k = parseInt(inputData[2]);

const result = list.reduce( (acc, v) => v === k ? acc += 1 : acc, 0);

console.log(result);