const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

const result = input.map(v => v ** 2).reduce( (acc, v) => acc += v, 0) % 10;

console.log(result);