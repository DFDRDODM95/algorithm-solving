const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

const input = parseInt(inputData);

const arr = Array(input).fill(1).map( (v, idx) => '*'.repeat(v + idx) )
arr.forEach( v => console.log(v) );