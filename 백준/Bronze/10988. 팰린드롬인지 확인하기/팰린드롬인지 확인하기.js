const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const reversed = [...input].reverse().join('');

const result = input === reversed ? 1 : 0

console.log(result);