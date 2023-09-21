const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n').map( v => parseInt(v) ).sort( (a, b) => a - b);

console.log(input[1]);