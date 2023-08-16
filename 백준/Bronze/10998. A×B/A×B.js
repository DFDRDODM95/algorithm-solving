const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

const [A, B] = input.map(v => Number(v));

console.log(A * B);