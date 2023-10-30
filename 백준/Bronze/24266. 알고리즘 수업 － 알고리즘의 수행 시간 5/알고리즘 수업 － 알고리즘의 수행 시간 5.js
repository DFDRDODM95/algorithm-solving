const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = BigInt(input);

console.log( (inputData ** 3n).toString() );
console.log(3);