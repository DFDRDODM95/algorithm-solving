const fs = require('fs');
const input = +fs.readFileSync(0, 'utf8').toString();

let A = Math.floor(input * 0.78);
let B = Math.floor(input * 0.956);

console.log(A + " " + B);