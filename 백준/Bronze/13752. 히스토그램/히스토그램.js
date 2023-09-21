const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const size = parseInt(input[0]);

const result = input.slice(1, size + 1).map( v => '='.repeat(v));

result.forEach( v => console.log(v) );