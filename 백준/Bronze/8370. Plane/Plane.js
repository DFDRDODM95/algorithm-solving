const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

const [n1, k1, n2, k2] = input.map( v => Number(v) );

console.log(n1*k1 + n2*k2);