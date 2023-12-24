const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const answer = input.split('').map(v => parseInt(v)).sort( (a, b) => b - a ).join('');

console.log(answer);