const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const amount = parseInt(inputData[0]);
const result = inputData.slice(1, amount + 1).map( v => v.at(0) + v.at(-1) );

result.forEach( v => console.log(v));