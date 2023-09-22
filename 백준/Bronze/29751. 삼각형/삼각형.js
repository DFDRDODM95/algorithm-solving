const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ').map(v => parseInt(v));
const [w, h] = input;

const result = w * h * 0.5;

console.log(result.toFixed(1));