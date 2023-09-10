const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const [a, b] = inputData.map(v => parseInt(v)).sort( (a, b) => b - a );

console.log( Math.abs(a - b) );