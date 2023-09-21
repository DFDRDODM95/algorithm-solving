const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map( v => parseInt(v));

const result = inputData.reduce( (acc, v) => acc += v,  0);

console.log(result);