const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');

const [a, b] = input.map(v => BigInt(v));

console.log ( ( a * b / 2n ).toString() );