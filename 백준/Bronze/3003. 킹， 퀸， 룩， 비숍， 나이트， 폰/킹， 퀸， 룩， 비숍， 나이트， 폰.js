const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ').map(v => parseInt(v));

const orj = [1, 1, 2, 2, 2, 8];
const result = orj.map( (v, idx) => v - input[idx] ).join(' ');

console.log(result);