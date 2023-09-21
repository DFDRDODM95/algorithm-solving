const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ').map(v => parseInt(v));
const [n, m, k] = input;

const answer1 = Math.ceil( (k + 1) / m ) - 1;
const answer2 = Math.ceil( k % m );

console.log(answer1 + ' ' + answer2);