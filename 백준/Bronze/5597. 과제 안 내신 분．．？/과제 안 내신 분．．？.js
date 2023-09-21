const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n').map( v => parseInt(v) );

const result = new Array(30).fill(1).map( (v, idx) => v + idx ).filter( v => input.includes(v) === false );

result.forEach( v => console.log(v) );