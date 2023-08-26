const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const data = inputData[0];
const idx = parseInt(inputData[1]) - 1;

console.log(data.at(idx));