const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
let [a, b] = input.split(' ').map(v => parseInt(v)).sort( (a, b) => b - a );

let ab = a * b;
let r = a % b;

for (; r = a % b; a = b, b = r) {}
const answer = [b , ab / b].join('\n');
console.log(answer);