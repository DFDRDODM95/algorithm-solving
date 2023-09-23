const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map(v => BigInt(v));

const [a, b] = input;

[a + b, a - b, a * b].forEach( v => console.log( v.toString() ) );