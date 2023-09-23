const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const inputData = input.map( (v, idx) => [ parseInt(v), idx + 1 ] ).sort( (a, b) => b[0] - a[0] );

inputData[0].forEach( v => console.log(v) );