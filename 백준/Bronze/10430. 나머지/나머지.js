const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const [A, B, C] = inputData.map( v => Number(v));

console.log( (A+B) % C );
console.log( ((A%C) + (B%C)) % C );
console.log( (A*B) % C );
console.log( ((A%C) * (B%C)) % C );