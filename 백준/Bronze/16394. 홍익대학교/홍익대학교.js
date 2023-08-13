const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

console.log(Number(inputData) - 1946);