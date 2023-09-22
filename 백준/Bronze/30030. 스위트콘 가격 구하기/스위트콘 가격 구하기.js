const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

const result = (inputData * 10) / 11; 

console.log(result.toFixed(0));