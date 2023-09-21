const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim();

console.log(inputData.length);