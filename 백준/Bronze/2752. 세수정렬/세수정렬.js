const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split(' ').map(v => parseInt(v));

const result = inputData.slice().sort( (a, b) => a - b ).join(' ');

console.log(result);