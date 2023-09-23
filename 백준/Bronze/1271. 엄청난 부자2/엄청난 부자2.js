const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ').map(v => BigInt(v));

const [k, div] = input;

const quotient = k / div;
const remain = k % div;

[quotient, remain].forEach( v => console.log( v.toString() ) );